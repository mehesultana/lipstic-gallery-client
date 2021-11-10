import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';
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
							<div>
								<button type="button" className=" btn btn-outline-dark">
									Add to cart <BiShoppingBag />
								</button>
								<button type="button" className="btn btn-outline-secondary">
									Rate this product <FcRating />
								</button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default Lipstick;
