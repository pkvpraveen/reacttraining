var Greeter = React.createClass({
    getDefaultProps: function () {
      return{
          name:'React'
      }
    },
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
    <Greeter/>,
    document.getElementById('app')
);