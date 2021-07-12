  
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="none" dark expand="md">
            <NavbarBrand href="/LoginPage">
                Log in
            </NavbarBrand>
            <NavbarBrand href="/RegistrationPage">
                Register
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/UserProfile" className="site-link">Profile</Link>
                </NavItem>
            </Nav>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/HoroscopePage" className="site-link">Horoscope</Link>
                </NavItem>
            </Nav>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/ForumPage" className="site-link">Forum</Link>
                </NavItem>
            </Nav>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/" className="site-link">LogOut</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;