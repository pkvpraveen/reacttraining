var React = require('react');
var GreeterMessage = React.createClass({
    render: function () {
        var cityName = this.props.cityName;

        return (
            <div>
                <h1>Hello {cityName}!</h1>
            </div>
        );
    }
});

module.exports = GreeterMessage;
