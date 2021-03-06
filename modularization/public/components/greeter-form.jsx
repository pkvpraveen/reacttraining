var React = require('react');
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var city = this.refs.city.value;
        var department = this.refs.department.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if (city.length > 0) {
            this.refs.city.value = '';
            updates.city = city;
        }
        if (department.length > 0) {
            this.refs.department.value = '';
            updates.department = department;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <input type="text" ref="city" placeholder="Enter city"/>
                </div>
                <div>
                    <input type="text" ref="department" placeholder="Enter department"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

module.exports = GreeterForm;