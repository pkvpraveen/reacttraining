var Greeter = React.createClass({
    getDefaultProps: function () {
      return{
          name:'React',
          message:'Welcome to the new world of Blah blah blah...'
      }
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1> Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});
ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);