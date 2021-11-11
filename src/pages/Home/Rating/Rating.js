import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Rating = ({ rating }) => {
	const { lipstickname, name, description, rate } = rating;

	return (
		<Container className="rating-container">
			<Col>
				<Card className="rating">
					<Card.Body>
						<Card.Title className="text-center">Lipstick Name : {lipstickname}</Card.Title>
						<h2 className="text-center">Rate :{rate}</h2>
						<Card.Text className="text-center">{description}</Card.Text>
						<p className="text-center">Buyer Name: {name}</p>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Rating;
