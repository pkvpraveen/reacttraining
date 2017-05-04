var React = require('react');
var {Link} = require('react-router');
var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Navigation</h2>
                <Link to="/">Get Weather </Link>
                <Link to="/contact-us"> Contact us </Link>
                <Link to="/services">Services </Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
});

module.exports = Nav;