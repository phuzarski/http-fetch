var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var ArtistStore = Reflux.createStore({
  listenables: [Actions],
  getArtists: function() {
    HTTP.get('/artists')
    .then(function(json) {
      this.artists = json;
      console.log("DATA nowe: ", json);
      this.fireUpdate();
    }.bind(this));
  },
  postArtist: function(data) {

    if(!this.artists) {
      this.artists = [];
    }
      var artist = {
        "id": Math.floor(Date.now() / 1000),
        "name": data.name,
        "email": data.email,
        "pass": data.pass,
        // "password_conf": password_conf
      };
      this.artists.push(artist);
      this.fireUpdate();

      HTTP.post('/artists', artist)
      .then(function(response) {
        this.getArtists();
      }.bind(this));

  },
  // odswiez dane
  fireUpdate: function() {
    this.trigger('change', this.artists);
  }
});



module.exports = ArtistStore;
