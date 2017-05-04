var React = require('react');
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var cityName = this.refs.cityName.value;

        if (cityName.length > 0) {
            this.refs.cityName.value = '';
            updates.cityName = cityName;
        }

        this.props.onNewData(updates);
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