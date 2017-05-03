var Greeter = React.createClass({
    getDefaultProps: function () {
      return{
          name:'React',
          message:'Welcome to the new world of Blah blah blah...'
      }
    },
    onBtnClick:function (e) {
      e.preventDefault();
      var user = this.refs.user.value;
      alert(user);
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1> Hello {name}!</h1>
                <p>{message}</p>

                <form onSubmit={this.onBtnClick}>
                    <input type="text" ref="user"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});
ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);