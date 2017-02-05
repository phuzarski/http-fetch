var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060'; //zmienic na API jak zacznie działać ich (ip/admin)
var artists = '/artists';

var service = {
  get: function(url) {
    console.log("making request")
    return fetch(baseUrl + url)
    .then(function(response) {
      console.log("RES: ", response)
      return response.json();
    });
  },
  //post
  post: function(url, artist) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(artist)
    }).then(function(response) {
      return response;
    });
    }
  };


module.exports = service;
