import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Order.css';

const Order = () => {
	const {
		register,
		handleSubmit,
		reset,

		formState: { errors },
	} = useForm();
	const { user } = useAuth();
	const onSubmit = (data) => {
		fetch('https://lipstick-gallery.herokuapp.com/order', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Order processed Successfully');

					reset();
				}
			});
	};

	return (
		<Container className="add-review">
			<h2 className="text-center">Place Your Order Here</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input defaultValue={user.displayName} {...register('name')} />

				<input defaultValue={user.email} {...register('email', { required: true })} />
				{errors.email && <span className="error">This field is required</span>}
				<input placeholder="Address" defaultValue="" {...register('address')} />
				<input placeholder="City" defaultValue="" {...register('city')} />
				<input placeholder="phone number" defaultValue="" {...register('phone')} />

				<input type="submit" />
			</form>
		</Container>
	);
};

export default Order;
