var React = require('react');


var ListItem = React.createClass({
    render: function() {
        return (

              <div className="row">
              <table className="table table-bordered">
                <thead>
        <tr>
          <th>Firstname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.email}</td>
        </tr>
      </tbody>
    </table>
  </div>

        );
    }
});

module.exports = ListItem;
