import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Loading from './loader/Loading';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			loginDetails: {
				username: "",
				password: ""
			},
			errorMessages: {},
			loading: false,
			redirect: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.validateLoginDetails();

		this.loginUser();
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

	loginUser() {
		let { loginDetails } = this.state;

		if(loginDetails.username !== "" && loginDetails.password !== "") {
			this.setState({loading: true});
			axios({
				method: "post",
				url: "http://192.168.99.100:4000/api/v1/auth/login",
				data: loginDetails
			})
			.then(response => {
				this.setState({loading: false});
				let { token } = response.data;

				if(token) {
					localStorage.setItem('token', token);
				}
				this.setState({redirect: true});
			})
			.catch(error => {
				this.setState({loading: false})
				let { errorMessages } = this.state;

				errorMessages.authError = "Invalid username and/or password";
				this.setState(errorMessages);

				console.log(error);
			})
		} else {
			console.log('missing input fields');
		}
	}

	render() {
		if(this.state.redirect) {
			return <Redirect to='profile'/>
		}

		return (
			<div id="body" onSubmit={this.handleSubmit}>
				<form className="login-form">
					<div className="insta-logo-type"></div>

					<div className="input-box">
						<p className="err">{this.state.errorMessages.authError ? this.state.errorMessages.authError : ""}</p>
						<p className="err">{this.state.errorMessages.username ? this.state.errorMessages.username : ""}</p>
						<input onChange={this.handleChange} type="text" name="username" className="text-field username" placeholder="Username"/>
					</div>

					<div className="input-box">
						<p className="err">{this.state.errorMessages.password ? this.state.errorMessages.password : ""}</p>
						<input onChange={this.handleChange} type="password" name="password" className="text-field password" placeholder="Password"/>
					</div>

					<input type="submit" name="login" className="def-button login" value="Login"/>

					<div className="loading-gif">
						{this.state.loading ? <Loading type={'bars'} color={'#000000'} /> : ""}
					</div>

				</form>
				<div className="form-pointer">
					<p className="msg">Don't have an account? <Link to="/" className="link">Sign up</Link></p>
				</div>
			</div>
		);
	}
}

export default Login;