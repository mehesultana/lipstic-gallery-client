import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from '../../Home/Ratings/Ratings';
import { FcRating } from 'react-icons/fc';

const Review = () => {
	return (
		<>
			<Ratings />
			<div className="text-center mt-5 mb-5">
				<Link to="/addreview">
					<Button type="button" className="btn btn-secondary ">
						Add your review <FcRating />
					</Button>
				</Link>
			</div>
		</>
	);
};

export default Review;
