var React = require('react');


var ListItem = React.createClass({
    render: function() {


        return (
          <div>
            <table className="table table-bordered" >
              <thead>
                <tr>
                  <th width="150px">Firstname</th>
                  <th width="150px">Email</th>
                  <th width="150px">Password</th>
                  <th width="150px">Edit: </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.name}</td>
                  <td>{this.props.email}</td>
                  <td>{this.props.pass}</td>
                  <td><span className="glyphicon glyphicon-pencil"></span></td>
                </tr>
              </tbody>
            </table>
          </div>

        );
    }
});

module.exports = ListItem;
