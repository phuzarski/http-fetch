var React = require('react');


var ListItem = React.createClass({
    render: function() {
        return (
            <li>
                <h4>{this.props.id}</h4>
                <h4>{this.props.name}</h4>
                <h3>{this.props.email}</h3>
                <h2>{this.props.pass}</h2>
                <h1>{this.props.pass_conf}</h1>
            </li>
        );
    }
});

module.exports = ListItem;
