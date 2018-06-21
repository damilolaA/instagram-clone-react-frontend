import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			
		}
	}

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
					<p className="msg">Don't have an account? <Link to="/" className="link">Sign up</Link></p>
				</div>
			</div>
		);
	}
}

export default Login;