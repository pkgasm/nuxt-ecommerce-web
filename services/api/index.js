import User from "./users";

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.users = new User(this.baseUrl)
  }
}
