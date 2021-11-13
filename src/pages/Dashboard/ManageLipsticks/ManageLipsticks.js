import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import './ManageLipsticks.css';

const ManageLipsticks = () => {
	const [lipsticks, setLipsticks] = useState([]);

	useEffect(() => {
		fetch(`https://lipstick-gallery.herokuapp.com/lipsticks`)
			.then((res) => res.json())
			.then((data) => setLipsticks(data));
	}, []);

	const handleDelete = (id) => {
		const url = `https://lipstick-gallery.herokuapp.com/lipsticks/${id}`;
		fetch(url, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					alert('deleted');
					const remaining = lipsticks.filter((lipstick) => lipstick._id !== id);
					setLipsticks(remaining);
				}
			});
	};

	return (
		<Container className="text-center manage-lipstick">
			<div className="mt-4 mb-4">
				<h3 className="mb-5">Manage Products</h3>
				<hr />
				{lipsticks.map((lipstick) => (
					<div key={lipstick._id}>
						<Col>
							<Card className="offer">
								<Card.Body>
									<Card.Title className="text-center">{lipstick.name}</Card.Title>

									<Button className="btn btn-danger" onClick={() => handleDelete(lipstick._id)}>
										Delete <AiOutlineDelete />
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</div>
				))}
			</div>
		</Container>
	);
};

export default ManageLipsticks;
