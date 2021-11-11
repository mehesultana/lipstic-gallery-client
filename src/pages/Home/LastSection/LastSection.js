import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Ratings from '../Ratings/Ratings';
import { FcHome } from 'react-icons/fc';
import { BsFillCartFill } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LastSection.css';

const LastSection = () => {
	return (
		<>
			<Container className="text-center last-section">
				<h1 className="mb-5">Shopping at Lipstick Gallery is easy!</h1>
				<CardGroup>
					<Card className="card">
						<Link className="ms-3 cart">
							<FcHome />
						</Link>
						<Card.Body>
							<Card.Title>Shop from comfort of home</Card.Title>
							<p>Our website is designed to quickly filter shade selections.</p>
						</Card.Body>
					</Card>

					<Card className="card">
						<Link className="ms-3  cart">
							<BsFillCartFill />
						</Link>
						<Card.Body>
							<Card.Title>Add items to your cart</Card.Title>
							<p>Add shades you love to your cart as you browse. Easy access cart icon.</p>
						</Card.Body>
					</Card>

					<Card className="card">
						<Link className="ms-3 cart">
							<FaCarSide />
						</Link>
						<Card.Body>
							<Card.Title>Your makeup arrives in days</Card.Title>
							<p>Experience the best your neighborhood has to offer, all in one app.</p>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>

			{/* ratings */}

			<Ratings />
		</>
	);
};

export default LastSection;
