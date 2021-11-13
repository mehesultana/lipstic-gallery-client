import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';
import aboutus from '../../../images/banner8.jpg';

const AboutUs = () => {
	return (
		<Container className="text-center mt-5 mb-5 aboutus">
			<Container className="lipstick-banner">
				<img src={aboutus} className="img-fluid" alt="ResponsiveImage" />
			</Container>
			<h3>ABOUT US</h3>
			<p>
				The contemporary Indian beauty expert - Lipstick Gallery continuously innovates to offer a wide range of high performance and world class cosmetics and skincare products that have earned recognition from the People for the Ethical Treatment of Animals (PETA). We, at Lakme, combine
				international cosmetic technology with an in-depth understanding of the Indian woman’s needs and offer a comprehensive beauty experience to our customers through products that are ideal for a variety of Indian skin tones. Lipstick Gallerywas the country's first cosmetic brand to introduce
				makeup to Indian women and takes pride in being the expert on Indian Beauty for over 50 years. We also take immense pride in being a compassionate beauty brand which is why we do not believe in or support testing on animals. Our bond with beauty and fashion goes beyond skincare & makeup
				hence it is manifested through the renowned Lipstick GalleryFashion Week, which is now the largest fashion event of its kind in the country that celebrates the beauty of fashion.
			</p>
		</Container>
	);
};

export default AboutUs;
