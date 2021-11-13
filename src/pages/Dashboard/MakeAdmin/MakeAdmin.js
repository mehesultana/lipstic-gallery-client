import { Button, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};
	const handleAdminSubmit = (e) => {
		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log(data);
					setSuccess(true);
				}
			});

		e.preventDefault();
	};

	return (
		<Container className="text-center mt-5 mb-5">
			<h2>Make an Admin</h2>
			<form onSubmit={handleAdminSubmit}>
				<input label="Email" type="email" onBlur={handleOnBlur} />
				<br />
				<br />
				<Button className="btn btn-secondary">Make Admin</Button>
			</form>
			{success && alert('Login successfully!')}
		</Container>
	);
};

export default MakeAdmin;