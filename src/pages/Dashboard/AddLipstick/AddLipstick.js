import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddLipstick.css';

const AddLipstick = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios.post(`https://lipstick-gallery.herokuapp.com/lipsticks`, data).then((res) => {
			if (res.data.insertedId) {
				alert('added succesfully');
				reset();
			}
		});
	};

	return (
		<Container className="add-lipstick text-center">
			<h2 className="text-center">Add a lipstick</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('name', { required: true, maxLength: 20 })} placeholder="Name" />
				<input {...register('description')} placeholder="Description" />
				<input type="number" {...register('price')} placeholder="Price" />
				<input {...register('img')} placeholder="Img" />
				<input type="submit" />
			</form>
		</Container>
	);
};

export default AddLipstick;
