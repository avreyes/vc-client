import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './auth/Login';
import HoroscopePage from './pages/HoroscopePage';
import ForumPage from './pages/ForumPage';
import RegistrationPage from './auth/Register';
import Nav from './Nav';
import Logout from './components/Logout';

export default function Main(props) {

    return (
        <React.Fragment>
            <Router>
            <Nav />
                <Switch>
                    <Route exact path='/' component= { HomePage } />
                    <Route exact path='/LoginPage' >
                        < LoginPage  updateToken = {props.updateToken()} />
                    </Route>
                    <Route exact path='/RegistrationPage' >
                        < RegistrationPage updateToken = {props.updateToken()} />
                    </Route>
                    <Route exact path='/HoroscopePage' component= { HoroscopePage } />
                    <Route exact path='/ForumPage' component= { ForumPage } />
                    <Route path='/:id' component={ UserPage } />
                </Switch>
            </Router>
        </React.Fragment>
    )
}