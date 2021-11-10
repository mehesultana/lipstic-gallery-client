import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<Container>
			<Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="sm">
				<Container>
					<Navbar.Brand to="/home">LG</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link className="ms-3 home" as={Link} to="/home">
							Home
						</Nav.Link>
						<Nav.Link className="ms-3 " as={Link} to="/lipsticks">
							Lipsticks
						</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
