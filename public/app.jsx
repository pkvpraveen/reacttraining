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

var firstName = 'Amarjeet';

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);