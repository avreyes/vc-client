import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import HoroscopePage from './pages/HoroscopePage';
import ForumPage from './pages/ForumPage';
import RegistrationPage from './pages/RegistrationPage';
import Nav from './Nav';

export default function Main() {

    return (
        <React.Fragment>
            <Router>
            <Nav />
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/LoginPage' component={ LoginPage } />
                    <Route exact path='/RegistrationPage' component={ RegistrationPage } />
                    <Route exact path='/HoroscopePage' component= { HoroscopePage } />
                    <Route exact path='/ForumPage' component= { ForumPage } />
                    <Route path='/:id' component={ UserPage } />
                </Switch>
            </Router>
        </React.Fragment>
    )
}