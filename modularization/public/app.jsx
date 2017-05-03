var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/greeter');
var firstName = 'Praveen';

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);