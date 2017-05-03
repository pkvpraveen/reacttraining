var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!',
            city: 'Pune',
            department: 'IT'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message,
            city: this.props.city,
            department: this.props.department
        };
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        var city = this.state.city;
        var department = this.state.department;

        return (
            <div>
                <GreeterMessage name={name} message={message} city={city} department={department}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;