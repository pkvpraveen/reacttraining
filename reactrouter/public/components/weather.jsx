var React = require('react');
var GreeterForm = require('./greeter-form');
var GreeterMessage = require('./greeter-message');
var {getTemp} = require('./api/call-api');
var Main = React.createClass({
    getInitialState: function () {
        return {
            loading: false
        };
    },
    handleSearch: function (cityName) {
        const that = this;
        this.setState({loading: true});
        getTemp(cityName).then(function (temp) {
            that.setState({
                cityName: cityName,
                temp: temp,
                loading: false
            });
        }, function (errorMessage) {
            that.setState({
                loading: false
            });
            alert(errorMessage);
        });
    },
    render: function () {
        const {temp, cityName, loading}= this.state;
        return (
            <div>
                <GreeterMessage temp={temp} location={cityName} loading={loading}/>
                <GreeterForm handleSearch={this.handleSearch}/>
            </div>
        );
    }
});

module.exports = Main;