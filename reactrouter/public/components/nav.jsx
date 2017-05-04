var React = require('react');
var {Link,IndexLink} = require('react-router');
var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Navigation</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
                <Link to="/contact-us" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Contact us </Link>
                <Link to="/services" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Services </Link>
                <Link to="/login" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Login</Link>
            </div>
        );
    }
});

module.exports = Nav;