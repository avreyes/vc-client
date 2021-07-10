import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
import HoroscopePage from './pages/HoroscopePage';
import ForumPage from './pages/ForumPage';


import './App.css';
export default function App() {

  return (
    <Switch>
      <Route exact path='/' component={ HomePage } />
      {/* <Route exact path='/LoginPage' component={ LoginPage } /> */}
      <Route exact path='/HoroscopePage' component= { HoroscopePage } />
      <Route exact path='/ForumPage' component= { ForumPage } />
      <Route path='/:id' component={ UserPage } />
    </Switch>
  )
}