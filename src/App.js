import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './auth/Auth';
import './App.css';
//import Landing from './pages/Landing';
import UserPage from './pages/UserPage';
import ForumPage from './pages/ForumPage';
import HoroscopePage from './pages/HoroscopePage';
import Sitebar from './home/Sitebar';
// import Index from './index';



export default function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect (() => {
      if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
          console.log('token', sessionToken)
      }
  }, [sessionToken])

  const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
      console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    console.log('token');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <UserPage token={sessionToken} />
    : <Auth updateToken={updateToken} />)
  }

  return (
    <>
      <Sitebar clickLogout={clearToken}/>
        {protectedViews()}
      {/* <Switch> */}

        {/* <Route exact path='/Landing'
                render={props => {
                  <Landing {...props} title={`Landing`}/>
                }} /> */}
        {/* <Route exact path='ForumPage'
                render={props => {
                  <ForumPage {...props} title={`Forum Page`}/>
                }} />
        <Route exact path='/UserPage/:id'
                render={props => {
                  <UserPage {...props} title={`User Page`}/>
                }} />
        <Route exact path='/HoroscopePage' component={HoroscopePage}/>
      </Switch>  */}
      
    </>
  );
}