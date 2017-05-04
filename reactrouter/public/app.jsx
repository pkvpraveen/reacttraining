var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/main');
var Login = require('./components/login');
var ContactUs = require('./components/contact-us');
var Services = require('./components/services');
var Weather = require('./components/weather');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="contact-us" component={ContactUs}/>
            <Route path="login" component={Login}/>
            <Route path="services" component={Services}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);