import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container } from 'react-bootstrap';
import './Signup.css';

import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
	const [loginData, setLoginData] = useState({});
	const history = useHistory();
	const { registerUser, isLoading } = useAuth();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		if (loginData.password !== loginData.password2) {
			alert('Your password did not match');
			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	};

	return (
		<Container className="text-center signup-form mt-5 mb-5 background-image">
			{!isLoading && (
				<form onSubmit={handleLoginSubmit}>
					<br />
					<input type="name" name="name" id="" placeholder="Your Name" onBlur={handleOnBlur} />
					<br />
					<input type="email" name="email" id="" placeholder="Your Email" onBlur={handleOnBlur} />
					<br />
					<input type="password" name="password" id="" placeholder="Your Password" onBlur={handleOnBlur} />
					<br />
					<input type="password" name="password2" id="" placeholder="ReType Your Password" onBlur={handleOnBlur} />
					<br />
					<br />

					<button type="submit" className="btn btn-success">
						Signup
					</button>

					<br />
					<br />
					<h5>
						Have an account ? <Link to="/login">Login</Link>
					</h5>
				</form>
			)}
		</Container>
	);
};

export default Signup;
