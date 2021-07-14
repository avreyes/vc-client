import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';
import LandingPage from '../pages/Landing';
import ForumPage from '../pages/ForumPage';
import UserPage from '../pages/UserPage';
import HoroscopePage from '../pages/HoroscopePage';



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
            {/* <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar> */}
            <Nav className='ml-auto' navbar>
                {/* <NavbarBrand>
                            <Link to='/Landing'>Home</Link>
                        </NavbarBrand> */}
                <Link to='/ForumPage'>Horoscope Forum</Link>
                <Link to='/UserProfile'>Profile</Link>
                <Link to='/DailyHoroscope'>Daily Horoscope</Link>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
                <Switch>
                    <Route exact path='/ForumPage'
                        render={props => {
                            <ForumPage {...props} title={`Forum Page`} />
                        }} />
                    <Route exact path='/UserPage/:id'
                        render={props => {
                            <UserPage {...props} title={`User Page`} />
                        }} />
                    <Route exact path='/HoroscopePage'><HoroscopePage /></Route>
                </Switch>


            </Nav>
            {/* </Collapse> */}
        </Navbar>
    )
}

export default Sitebar;