import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HoroscopePage from './pages/HoroscopePage';
import UserPage from './pages/UserPage';
import ForumPage from './pages/ForumPage';
import LandingPage from './pages/Landing';


const Paths = () => {

    return (
        <React.Fragment>
            <Router>
                <LandingPage /*token = {props.sessionToken()}*/ />
                <Switch>
                    <Route exact path='/HoroscopePage' component= { HoroscopePage } />
                    <Route exact path='/ForumPage' component= { ForumPage } />
                    <Route path='/UserPage' >
                        < UserPage /*token = {props.sessionToken()}*/ />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Paths;