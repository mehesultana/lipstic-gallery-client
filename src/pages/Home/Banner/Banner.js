import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { BiShoppingBag } from 'react-icons/bi';
import banner1 from '../../../images/banner6.jpg';
import banner2 from '../../../images/banner5.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
	return (
		<Container className="banner-image">
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={banner1} alt="First slide" />
					<Carousel.Caption>
						<h3>LIPSTICK GALLERY</h3>
						<p>You’re searching for beauty you can believe in.</p>
						<section className="search-area">
							<button type="button" className="btn btn-warning">
								Shop now <BiShoppingBag />
							</button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={banner2} alt="Second slide" />

					<Carousel.Caption>
						<h3>BE BEAUTY</h3>
						<p>Makeup that performs beautifully AND doesn’t irritate your skin.</p>
						<section className="search-area">
							<button type="button" className="btn btn-warning">
								Shop now <BiShoppingBag />
							</button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={banner3} alt="Third slide" />

					<Carousel.Caption>
						<h3>Find Beauty</h3>
						<p>You’ve found it, and welcome!</p>
						<section className="search-area">
							<button type="button" className="btn btn-warning">
								Shop now <BiShoppingBag />
							</button>
						</section>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default Banner;
