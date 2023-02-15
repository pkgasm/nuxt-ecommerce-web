import axios from "axios";
import cookies from "js-cookie";

export default class Auth {
  baseUrl = "/";
  strategy = {
    endpoints: {
      login: {
        url: "api/v1/auth/login",
        method: "post",
      },
      logout: {
        url: "api/v1/auth/logout",
        method: "post",
      },
      user: {
        url: "api/v1/users/me",
        method: "get",
      },
    },
    user: {
      property: "user",
      autoFetch: true,
    },
    token: {
      property: "token",
      type: "bearer",
      header: "Authorization",
    },
  };

  auth = {
    user: useState("user", () => null),
    loggedIn: useState("loggedIn", () => false),
  };

  constructor(baseUrl, options) {
    this.baseUrl = baseUrl ?? this.baseUrl;

    this.strategy.endpoints.login.url =
      options?.endpoints?.login?.url ?? this.strategy.endpoints.login.url;
    this.strategy.endpoints.login.method =
      options?.endpoints?.login?.method ?? this.strategy.endpoints.login.method;

    this.strategy.endpoints.logout.url =
      options?.endpoints?.logout?.url ?? this.strategy.endpoints.logout.url;
    this.strategy.endpoints.logout.method =
      options?.endpoints?.logout?.method ??
      this.strategy.endpoints.logout.method;

    this.strategy.endpoints.user.url =
      options?.endpoints?.user?.url ?? this.strategy.endpoints.user.url;
    this.strategy.endpoints.user.method =
      options?.endpoints?.user?.method ?? this.strategy.endpoints.user.method;

    this.strategy.user.property =
      options?.user?.property ?? this.strategy.user.property;
    this.strategy.user.autoFetch =
      options?.user?.autoFetch ?? this.strategy.user.autoFetch;

    this.strategy.token.property =
      options?.token?.property ?? this.strategy.token.property;
    this.strategy.token.type = options?.token?.type ?? this.strategy.token.type;
    this.strategy.token.header =
      options?.token?.header ?? this.strategy.token.header;

    this.mount();
  }

  async mount() {
    const token = this.getToken();
    if (token && !this.user) {
      this.setToken(token);
      if (this.strategy.user.autoFetch) await this.fetchUser();
    }
  }

  login(params) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${this.baseUrl}${this.strategy.endpoints.login.url}`,
        method: this.strategy.endpoints.login.method,
        data: params,
      })
        .then(async (response) => {
          const token = response.data[this.strategy.token.property];
          const type = this.strategy.token.type;
          this.setToken(`${type} ${token}`);
          if (this.strategy.user.autoFetch) await this.fetchUser();
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  fetchUser() {
    return new Promise((resolve, reject) => {
      const token = this.getToken();
      const headers = {};
      headers[this.strategy.token.header] = token;

      axios({
        url: `${this.baseUrl}${this.strategy.endpoints.user.url}`,
        method: this.strategy.endpoints.user.method,
        headers: headers,
      })
        .then((response) => {
          const user = response.data[this.strategy.user.property];
          this.setUser(user);
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      const token = this.getToken();
      const headers = {};
      headers[this.strategy.token.header] = token;

      axios({
        url: `${this.baseUrl}${this.strategy.endpoints.logout.url}`,
        method: this.strategy.endpoints.logout.method,
        headers: headers,
      })
        .then((response) => {
          resolve(response.data);
          this.setUser(null)
          this.removeToken()
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  setUser(user = null) {
    this.auth.user.value = user;
    this.auth.loggedIn.value = Boolean(user);
  }

  get user() {
    return this.auth.user.value;
  }

  get loggedIn() {
    return this.auth.loggedIn.value;
  }

  setToken(token) {
    localStorage.setItem("auth.token", token);
    cookies.set("auth.token", token);
  }

  getToken() {
    let token = null;
    if (!token) token = localStorage.getItem("auth.token");
    if (!token) token = cookies.get("auth.token");
    return token;
  }

  removeToken() {
    localStorage.removeItem("auth.token");
    cookies.remove("auth.token", { paht: "" });
  }
}
