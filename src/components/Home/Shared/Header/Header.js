import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link,} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/jeevak-health-care-b0a1faa400a-70e71224a96.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top rounded-circle"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand className="fw-bold" href="#home">Delta Health Care Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#about">About Us</Nav.Link>
                        {
                            user?.email ? <Button onClick={logOut} variant="outline-light">Logout</Button> :
                                <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a href="#login" className="ms-2">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;