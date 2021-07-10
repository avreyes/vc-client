import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
    
    return (
        <>
        <h1>Vibe Check Home Page</h1>
        {/* <Link to='/LoginPage'>Sign In</Link> */}
        <br></br>
        <Link to='/UserProfile'>Profile</Link>
        <br></br>
        <Link to='/HoroscopePage'>Horoscope</Link>
        <br></br>
        <Link to='/ForumPage'>Forums</Link>
        <br></br>

        </>
    );
}