import axios from "axios";

import { getHeaders } from "./headers";

export default class User {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  update(id, params) {
    const headers = getHeaders();
    return axios.put(`${this.baseUrl}api/v1/users/${id}`, params, {
      headers: headers,
    });
  }
}
