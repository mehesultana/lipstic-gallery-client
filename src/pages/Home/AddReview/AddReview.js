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
			if (res.data.insertedId) {
				alert('added succesfully');
				reset();
			}
		});
	};

	return (
		<Container className="add-review">
			<h2 className="text-center">Add a Review</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('lipstick name', { required: true, maxLength: 50 })} placeholder="Lipstick Name" />
				<input {...register('description')} placeholder="Description" />
				<input type="number" {...register('rate')} placeholder="Rate (0-5)" />
				<input {...register('name')} placeholder="Your name" />

				<input type="submit" />
			</form>
		</Container>
	);
};

export default AddReview;
