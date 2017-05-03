var React = require('react');
var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        var city = this.props.city;
        var department = this.props.department;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <p>{city + ' ' + department}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;
