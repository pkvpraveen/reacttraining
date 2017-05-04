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
                <div>
                    <input type="text" ref="cityName" placeholder="Enter name"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

module.exports = GreeterForm;