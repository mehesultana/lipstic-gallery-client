import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle } = useAuth();

	return (
		<Container className="text-center">
			<h2>Please Login</h2>
			<button onClick={signInUsingGoogle} className="btn btn-warning">
				Google Sign In
			</button>
		</Container>
	);
};

export default Login;
