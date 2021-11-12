import React from 'react';
import { Card, Col, Container, Button } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import './Lipstick.css';

const Lipstick = ({ lipstick, setBookingSuccess }) => {
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
							<div className="">
								<Link to="/order">
									<Button variant="contained">
										Add to cart <BiShoppingBag />
									</Button>
								</Link>
								<Link to="/addreview">
									<button type="button" className="btn btn-outline-secondary ">
										Rate this product <FcRating />
									</button>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default Lipstick;
