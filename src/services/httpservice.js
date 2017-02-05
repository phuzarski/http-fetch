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
  //put
  //patch
}

module.exports = service;
