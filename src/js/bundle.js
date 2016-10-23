var React = require('react');
var ReactDOM = require('react-dom');
import LoginModal from './LoginModal';
import SignupModal from './SignupModal'
const Login = document.getElementById('Login1');
const SignUp = document.getElementById('SignUp1');
console.log('bundle js here');
ReactDOM.render(<SignupModal />, SignUp);
ReactDOM.render(<LoginModal />, Login);
