import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import './Lipstick.css';

const Lipstick = ({ lipstick }) => {
	const { name, description, img, price } = lipstick;
	return (
		<div>
			<Container className="lipstick-container">
				<Col>
					<Card className="lipstick">
						<Card.Img variant="top" src={img} className="card-img" />
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<h5>Price: {price}$</h5>
							<Card.Text>{description}</Card.Text>
							<Button className="text-center btn btn-dark">
								Add to cart <BiShoppingBag />
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default Lipstick;
