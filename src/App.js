import React, { useState, useEffect } from 'react';
import Auth from './auth/Auth';
import './App.css';
import Sitebar from './home/Sitebar';
import LandingPage from './pages/Landing';


export default function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect (() => {
      if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
          console.log('token', sessionToken)
      }
  }, [])

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
    return (sessionToken === localStorage.getItem('token') ? <LandingPage token={sessionToken} />
    : <Auth updateToken={updateToken} />)
  }

  return (
    <React.Fragment>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
    </React.Fragment>
  );
}