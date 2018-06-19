import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			signupDetails: {
				username: "",
				email: "",
				password: ""
			},
			errorMessages: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.validateSignUpData();

		this.signupUser();
	}

	handleChange(e) {
		let userDetails = this.state.signupDetails,
				inputName = e.target.name;

		userDetails[inputName] = e.target.value;
		this.setState(userDetails);
	}

	validateSignUpData() {
		let signupData = this.state.signupDetails,
				errors = this.state.errorMessages;
	
		for(let value in signupData) {
			if(signupData[value] === "") {
				errors[value] = "Please enter your " + value;
				return this.setState(errors);
			}
		}
	}

	signupUser() {
		let data = this.state.signupDetails;

		if(data['username'] !== "" && data['password'] !== "" && data['email'] !== "") {
			axios({
				method: "post",
				url: "http://192.168.99.100:4000/api/v1/user/register",
				data: data
			})
			.then(response => {
				let { id } = response.data;
				console.log(id);
			})
			.catch(error => {
				console.log(error);
			})
		} else {
			console.log('required fields not complete');
		}
	}

	render() {
		return (
			<div id="body" onSubmit={this.handleSubmit}>
				<form className="signup-form">
					<div className="insta-logo-type"></div>
					<p className="err">{this.state.errorMessages.username ? this.state.errorMessages.username : ""}</p>
					<input onChange={this.handleChange} type="text" name="username" className="text-field username" placeholder="Username"/>
					<input onChange={this.handleChange} type="text" name="email" className="text-field username" placeholder="Email"/>
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