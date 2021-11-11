import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lipstick from '../Lipstick/Lipstick';
import './Lipsticks.css';

const Lipsticks = () => {
	const [lipsticks, setLipsticks] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/lipsticks`)
			.then((res) => res.json())
			.then((data) => setLipsticks(data));
	}, []);

	return (
		<Container>
			<Container className="lipstic-banner">
				<h2>Lipsticks</h2>
			</Container>
			<div className="text-center mt-4 mb-5">
				<h1>NEW ARRIVALS</h1>
				<h4>Your favorite lipstick is now a mobile game! Introducing Super Stay Match The Ink.</h4>
			</div>
			<Row xs={1} md={3} className="g-4 ">
				{lipsticks.map((lipstick) => (
					<Lipstick key={lipstick.id} lipstick={lipstick}></Lipstick>
				))}
			</Row>
		</Container>
	);
};

export default Lipsticks;
