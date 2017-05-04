var React = require('react');
var GreeterMessage = React.createClass({
    displayTempMessage: function () {
        const {temp, location, loading} = this.props;
        if (loading) {
            return (<h2>Loading ...</h2>);
        } else if (temp && location) {
            return (<h1>It is {temp} degree at {location}!</h1>);
        } else {
            return null;
        }
    },

    render: function () {
        return (
            <div>
                {this.displayTempMessage()}
            </div>
        );
    }
});

module.exports = GreeterMessage;
