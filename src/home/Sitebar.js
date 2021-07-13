import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import LandingPage from '../pages/Landing';



const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    // const clearToken = () => {
    //     localStorage.clear();
    //     setSessionToken('');
    //     console.log('token');
    //   }

    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand>Vibe Check</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <Router>
                        <NavbarBrand>
                            <Link to='/Landing'>Home</Link>
                        </NavbarBrand>
                        <NavbarBrand>
                            <Link to='/PostsIndex'>Horoscope Forum</Link>
                        </NavbarBrand>
                        <NavbarBrand>
                            <Link to='/UserProfile'>Profile</Link>
                        </NavbarBrand>
                        <NavbarBrand>
                            <Link to='/DailyHoroscope'>Daily Horoscope</Link>
                        </NavbarBrand>
                        <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                            <Switch>
                                <Route exact path='/Landing'
                                        render={props => {
                                            <LandingPage {...props} title={`Landing Page`}/>
                                        }} />
                            </Switch>
                    </Router>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;