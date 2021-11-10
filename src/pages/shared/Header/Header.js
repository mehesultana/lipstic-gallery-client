import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();
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
						{user?.email ? (
							<Button onClick={logOut} variant="light">
								Logout
							</Button>
						) : (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						<br />
						<Navbar.Text>
							<Link to="/">{user?.displayName}</Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
