/* eslint-disable func-names, no-undef, class-methods-use-this */

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author w3althambition
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET request.
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request.
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(resolve('Resource Deleted.'))
        .catch(err => reject(err));
    });
  }
}
