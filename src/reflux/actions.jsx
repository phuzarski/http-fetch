var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getArtists',
  'postArtist'
  //'updateArtist'
]);

module.exports = Actions;
