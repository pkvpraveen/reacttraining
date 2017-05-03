var Greeter = React.createClass({
    render: function () {
        var name = this.props.name;
        return(
            <div>
                <h1> Hello {name}!</h1>
            </div>
        );
    }
});
ReactDOM.render(
    <Greeter name="Praveen"/>,
    document.getElementById('app')
);