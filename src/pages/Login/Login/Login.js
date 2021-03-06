import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, signInWithGoogle, isLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/addreview';

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
		history.push(redirect_uri);
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle().then((result) => {
			console.log(result);
			history.push(redirect_uri);
		});
	};

	return (
		<Container className="login-form background-image">
			<div>
				<h2>Login</h2>
				<form onSubmit={handleLoginSubmit}>
					<input type="email" name="" id="" placeholder="Your Email" onChange={handleOnChange} />
					<br />
					<br />
					<input type="password" name="" id="" placeholder="Your Password" onChange={handleOnChange} />
					<br />
					<br />
					<input type="submit" value="Submit" />
					{isLoading && (
						<div class="spinner-border text-primary" role="status">
							<span class="sr-only">.</span>
						</div>
					)}
					{user?.email && alert('Login successfully!')}
				</form>
				<br />
				<p>
					new User ? <Link to="/signup">Create Account</Link>
				</p>
				<div>-------or----------</div>
				<Button onClick={handleGoogleSignIn} className="btn btn-secondary">
					<FcGoogle className="w-6 h-6" />
					Sign In With Google
				</Button>
			</div>
		</Container>
	);
};

export default Login;
