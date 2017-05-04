var React = require('react');
var GreeterForm = require('./greeter-form');
var GreeterMessage = require('./greeter-message');
var Main = React.createClass({
    getDefaultProps: function () {
        return {
            cityName: 'React'
        };
    },
    getInitialState: function () {
        return {
            cityName: this.props.cityName
        };
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var cityName = this.state.cityName;

        return (
            <div>
                <GreeterMessage cityName={cityName} />
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Main;