import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import './AddReview.css';

const AddReview = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios.post('http://localhost:5000/ratings', data).then((res) => {
			console.log(res);
		});
	};

	return (
		<Container className="add-review">
			<h2 className="text-center">Add a Review</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('name', { required: true, maxLength: 20 })} placeholder="Lipstick Name" />
				<input {...register('description')} placeholder="Description" />
				<input type="number" {...register('price')} placeholder="Rate (0-5)" />

				<input type="submit" />
			</form>
		</Container>
	);
};

export default AddReview;
