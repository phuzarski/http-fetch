var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ArtistStore = require('../reflux/artists-store.jsx');


var List = React.createClass({
  mixins: [Reflux.listenTo(ArtistStore, 'onChange')],
  getInitialState: function() {
    return {artists:[], name: "", email: "", password: "", password_conf: ""};
  },
  componentWillMount: function() {
    Actions.getArtists();
  },
  onChange: function(event, artists) {
    this.setState({artists: artists})
  },
  onInputChange: function(e) {
    this.setState({
      name: e.target.value,
      email: e.target.email,
      // password: e.target.password,
      // password_conf: e.target.password_conf
    });
  },

  onClick: function(e) {
      Actions.postArtist(this.state.name);
  },
    render: function() {
        var listItems = this.state.artists.map(function(item, key) {
          console.log(item);
            return <ListItem key={key} id={item.id} name={item.name} email={item.email} pass={item.pass} pass_conf={item.pass_conf} />;

        });

        return (
          <div>
            <input
              placeholder="Imie" value={this.state.name}
              onChange={this.onInputChange} />
            <input
              placeholder="email" value={this.state.email}
              onChange={this.onInputChange} />
            <input
              placeholder="password" value={this.state.password}
              onChange={this.onInputChange} />
            <input
              placeholder="password confirmation" value={this.state.password_conf}
              onChange={this.onInputChange} />

              <button onClick={this.onClick}>Add Artist</button>

              {listItems}
            </div>
      );
    }
});

module.exports = List;
