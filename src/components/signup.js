import React, { Component } from 'react';

class SignUp extends Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {

	}

	handleChange() {

	}

	render() {
		return (
			<div id="body" onSubmit={this.handleSubmit}>
				<form className="signup-form">
					<div className="insta-logo-type"></div>
					<input onChange={this.handleChange} type="text" name="username" className="text-field username" placeholder="Username"/>
					<input onChange={this.handleChange} type="password" name="password" className="text-field password" placeholder="Password"/>
					<input type="submit" name="signup" className="def-button signup" value="Sign up"/>
				</form>
				<div className="form-pointer">
					<p className="msg">Have an account? <a href="login.html" className="link">Log in</a></p>
				</div>
			</div>
		)
	}
}

export default SignUp;