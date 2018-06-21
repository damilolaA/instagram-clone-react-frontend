import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
			errorMessages: {},
			redirect: false
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
			  this.setState(errors);
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
				console.log(response);
				let { id } = response.data;
				if(id) {
					this.setState({redirect: true});
				}
			})
			.catch(error => {
				console.log(error);
			})
		} else {
			console.log('required fields not complete');
		}
	}

	render() {
		if(this.state.redirect) {
			return <Redirect to="/login"/>
		}

		return (
			<div id="body" onSubmit={this.handleSubmit}>
				<form className="signup-form">
					<div className="insta-logo-type"></div>

					<div className="input-box">
						<p className="err">{this.state.errorMessages.username ? this.state.errorMessages.username : ""}</p>
						<input onChange={this.handleChange} type="text" name="username" className="text-field username" placeholder="Username"/>
					</div>
					
					<div className= "input-box">
						<p className="err">{this.state.errorMessages.email ? this.state.errorMessages.email : ""}</p>
						<input onChange={this.handleChange} type="text" name="email" className="text-field email" placeholder="Email"/>
					</div>

					<div className= "input-box">
						<p className="err">{this.state.errorMessages.password ? this.state.errorMessages.password : ""}</p>
						<input onChange={this.handleChange} type="password" name="password" className="text-field password" placeholder="Password"/>
					</div>

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