var React = require('react');
var Nav = require('./nav');
var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav/>
                <h1> Main page</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;