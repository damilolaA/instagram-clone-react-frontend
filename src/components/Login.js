import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div id="body">
				<form className="login-form">
					<div className="insta-logo-type"></div>
					<input type="text" name="username" className="text-field username" placeholder="Username"/>
					<input type="password" name="password" className="text-field password" placeholder="Password"/>
					<input type="submit" name="login" className="def-button login" value="Login"/>
				</form>
				<div className="form-pointer">
					<p className="msg">Don't have an account? <a href="signup.html" className="link">Sign up</a></p>
				</div>
			</div>
		);
	}
}

export default Login;