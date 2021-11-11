import React from 'react';
import { Container } from 'react-bootstrap';
import notfound from '../../images/notfound.jpg';

const NotFound = () => {
	return (
		<Container className="text-center mt-5">
			<img src={notfound} alt="" />
		</Container>
	);
};

export default NotFound;
