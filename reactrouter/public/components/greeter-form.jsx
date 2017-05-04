var React = require('react');
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var cityName = this.refs.cityName.value;

        if (cityName.length > 0) {
            this.refs.cityName.value = '';
            cityName = cityName;
        }
        this.props.handleSearch(cityName);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Get Temperature</h2>
                <div>
                    <input type="text" ref="cityName" placeholder="Enter name of the city"/>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

module.exports = GreeterForm;