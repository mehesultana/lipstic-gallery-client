import React from 'react';
import { Container } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import './Banner.css';

const Banner = () => {
	return (
		<Container>
			<div className="banner-image">
				<div className="text-center text-white  ">
					<h2 className="mt-5">BE BEAUTY</h2>
					<h5 className="mt-2">
						You’re searching for beauty you can believe in.
						<br />
						Makeup that performs beautifully AND doesn’t irritate your skin.
						<br />
						You’ve found it, and welcome!
					</h5>

					<section className="search-area">
						<button type="button" className="btn btn-secondary">
							Shop now <BiShoppingBag />
						</button>
					</section>
				</div>
			</div>
		</Container>
	);
};

export default Banner;
