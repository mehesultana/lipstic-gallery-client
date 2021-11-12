import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
	const { register } = useForm();
	const { user } = useAuth();
	return (
		<Container className="text-center mt-5 mb-5">
			<input defaultValue={user.displayName} {...register('name')} />
			<br />
			<input defaultValue={user.email} {...register('email', { required: true })} />
		</Container>
	);
};

export default Profile;
