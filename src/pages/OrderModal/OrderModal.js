import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
const OrderModal = ({ openorder, handleorderClose, order, date, setorderSuccess }) => {
	const { name, time } = order;
	const { user } = useAuth();
	const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
	const [orderInfo, setorderInfo] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInfo = { ...orderInfo };
		newInfo[field] = value;
		setorderInfo(newInfo);
	};

	const handleorderSubmit = (e) => {
		// collect data
		const appointment = {
			...orderInfo,
			time,
			serviceName: name,
			date: date.toLocaleDateString(),
		};
		// send to the server
		fetch('http://localhost:5000/lipsticks', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(appointment),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					setorderSuccess(true);
					handleorderClose();
				}
			});

		e.preventDefault();
	};

	return (
		<Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={openorder} onClose={handleorderClose} closeAfterTransition>
			<Fade in={openorder}>
				<Container sx={style}>
					<h2>{name}</h2>
					<form onSubmit={handleorderSubmit}>
						<input disabled sx={{ width: '90%', m: 1 }} id="outlined-size-small" defaultValue={time} size="small" />
						<input sx={{ width: '90%', m: 1 }} id="outlined-size-small" name="patientName" onBlur={handleOnBlur} defaultValue={user.displayName} size="small" />
						<input sx={{ width: '90%', m: 1 }} id="outlined-size-small" name="email" onBlur={handleOnBlur} defaultValue={user.email} size="small" />
						<input sx={{ width: '90%', m: 1 }} id="outlined-size-small" name="phone" onBlur={handleOnBlur} defaultValue="Phone Number" size="small" />
						<input disabled sx={{ width: '90%', m: 1 }} id="outlined-size-small" defaultValue={date.toDateString()} size="small" />
						<Button type="submit" variant="contained">
							Submit
						</Button>
					</form>
				</Container>
			</Fade>
		</Modal>
	);
};

export default OrderModal;
