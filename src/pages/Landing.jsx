import React from 'react';
import './HomePage.css';
import solar from '../assets/etc/solar-system.png'
import horoscope from '../assets/etc/014-horoscope.png'
import clean from '../assets/etc/clean.png'

import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const style = {
    height: '30rem'
};

function LandingPage() {
    return (
    <>
    <div className='card-deck'>
        <Card style={style}>
            <CardImg
            alt="..."
            src={solar}
            top
            ></CardImg>
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </CardText>
            </CardBody>
        </Card>
        <Card style={style}>
            <CardImg
            alt="..."
            src={horoscope}
            top
            ></CardImg>
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
            </CardText>
            </CardBody>
        </Card>
        <Card style={style}>
            <CardImg
            alt="..."
            src={clean}
            top
            ></CardImg>
            <CardBody>
            <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
            </CardText>
            </CardBody>
        </Card>
        </div>
    </>
    );
}
export default LandingPage;


// export default function HomePage() {
    
//     return (
//         <>
//         <div class='header'>
//             <p>Vibe Check</p>
//         </div>
//         <div class='box'>
//             <img class='solar' src={solar} alt='constellation' />
//         </div>
//         </>
//     );
// }