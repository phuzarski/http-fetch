var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');


var List = React.createClass({
  getInitialState: function() {
    return {artists:[]};
  },
  componentWillMount: function() {
    HTTP.get('/artists')
    .then(function(data) {
      console.log("DATA: ", data);
      this.setState({artists: data});
    }.bind(this));
  },
    render: function() {
        var listItems = this.state.artists.map(function(item, key) {
          console.log(item);
            return <ListItem key={key} id={item.id} name={item.name} email={item.email} pass={item.pass} pass_conf={item.pass_conf} />;

        });

        return (
          <div className="row">
            <div className="components col-sm-4">
              {listItems}
            </div>
        </div>
      );
    }
});

module.exports = List;
