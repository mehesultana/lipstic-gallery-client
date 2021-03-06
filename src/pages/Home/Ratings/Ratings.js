import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Rating from '../Rating/Rating';
import review from '../../../images/reviewsrb.png';

const Ratings = () => {
	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		fetch(`https://lipstick-gallery.herokuapp.com/ratings`)
			.then((res) => res.json())
			.then((data) => setRatings(data));
	}, []);

	return (
		<Container>
			<div className=" text-center mt-4 mb-5">
				<Container className="review-image">
					<img src={review} className="img-fluid" alt="ResponsiveImage" />
				</Container>
				<p>Compare the most helpful customer reviews of the best rated products in our Lipsticks store. These products are shortlisted based on the overall star rating and the number of customer reviews received by each product in the store, and are refreshed regularly.</p>
			</div>

			<Row xs={1} md={3} className="g-4 ">
				{ratings.map((rating) => (
					<Rating key={rating._id} rating={rating}></Rating>
				))}
			</Row>
		</Container>
	);
};

export default Ratings;
