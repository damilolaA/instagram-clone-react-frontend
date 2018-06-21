import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			loginDetails: {
				username: "",
				password: ""
			},
			errorMessages: {}
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.validateLoginDetails();
	}

	handleChange(e) {
		let { loginDetails } = this.state,
				input = e.target.name;

		loginDetails[input] = e.target.value;

		this.setState(loginDetails);
	}

	validateLoginDetails() {
		let loginData = this.state.loginDetails,
				errors = this.state.errorMessages;

		for(let value in loginData) {
			if(loginData[value] === "") {
		
				errors[value] = "Please enter your " + value;			
				this.setState(errors);
			}
		}
	}

	render() {

		return (
			<div id="body" onSubmit={this.handleSubmit}>
				<form className="login-form">
					<div className="insta-logo-type"></div>

					<div className="input-box">
						<p className="err">{this.state.errorMessages.username ? this.state.errorMessages.username : ""}</p>
						<input onChange={this.handleChange} type="text" name="username" className="text-field username" placeholder="Username"/>
					</div>

					<div className="input-box">
						<p className="err">{this.state.errorMessages.password ? this.state.errorMessages.password : ""}</p>
						<input onChange={this.handleChange} type="password" name="password" className="text-field password" placeholder="Password"/>
					</div>

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