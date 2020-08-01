import axios from 'axios'

export default class API {
  static client() {
    return axios.create({
      baseURL: 'http://0.0.0.0:8000/api/',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static get(path) {
    return API.client().get(path)
  }

  static post(path, params) {
    return API.client().post(path, params)
  }

  static patch(path, params) {
    return API.client().patch(path, params)
  }

  static delete(path) {
    return API.client().delete(path)
  }
}
