import axios from "axios";
import querystring from "query-string";

var config = {
  headers: { "Content-Type": "application/json" },
};

export default class ApiClient {
  static post(url, params) {
    return new Promise((fulfill, reject) => {
      axios
        .post(url, JSON.stringify(params), config)
        .then((response) => {
          fulfill(response.data);
        })
        .catch((error) => {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static put(url, params) {
    return new Promise((fulfill, reject) => {
      axios
        .put(url, JSON.stringify(params), config)
        .then((response) => {
          fulfill(response.data);
        })
        .catch((error) => {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url, params) {
    let query = querystring.stringify(params);
    url = query ? `${url}?${query}` : url;
    return new Promise((fulfill, reject) => {
      axios
        .get(url, config)

        .then((response) => {
          fulfill(response.data);
        })
        .catch((error) => {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }

  static delete(url) {
    return new Promise((fulfill, reject) => {
      axios
        .delete(url, config)
        .then((response) => {
          fulfill(response.data);
        })
        .catch((error) => {
          if (error && error.response) {
            fulfill(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }
}
