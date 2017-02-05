var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ArtistStore = require('../reflux/artists-store.jsx');


var List = React.createClass({
  mixins: [Reflux.listenTo(ArtistStore, 'onChange')],
  getInitialState: function() {
    return {artists:[], name: ""};
  },
  componentWillMount: function() {
    Actions.getArtists();
  },
  onChange: function(event, artists) {
    this.setState({artists: artists})
  },
  onInputChange: function(event) {
    this.setState({name: event.target.value});
  },

  onClick: function(e) {
    if (this.state.name) { // spr czy nie jest puste pole
      Actions.postArtist(this.state.name);
    }
    this.setState({name: ""})
  },
    render: function() {
        var listItems = this.state.artists.map(function(item, key) {
          console.log(item);
            return <ListItem key={key} id={item.id} name={item.name} email={item.email} pass={item.pass} pass_conf={item.pass_conf} />;

        });

        return (
          // <div className="form-group">
          //   <input
          //     name="name" className="form-control" placeholder="Imie" value={this.state.name}
          //     onChange={this.onInputChange} />
          //
          //
          //     <button type="submit" className="btn btn-default" onClick={this.onClick}>Add Artist</button>
          //
          //     {listItems}
          //   </div>

    <div className="container">
      <div className="row">
    <div className="col-sm-6">
      <div className="form-group">
        <label for="exampleInputName2">Name</label>
        <input
            name="name" className="form-control" placeholder="Imie" value={this.state.name}
            onChange={this.onInputChange} />
      </div>
      <div className="form-group">
        <label for="exampleInputEmail2">Email</label>
        <input type="email" className="form-control" placeholder="email" />

    </div>
    <div className="form-group">
      <label for="exampleInputEmail2">Password</label>
      <input type="email" className="form-control"  placeholder="email" />

  </div>
      <button type="submit" className="btn btn-default" onClick={this.onClick}>Add Artist</button><br/><br/>
</div>
</div>
  {listItems}
</div>
      );
    }
});

module.exports = List;
