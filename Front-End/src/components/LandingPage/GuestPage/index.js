import React from 'react';
import './styles.css';
import Clock from 'react-live-clock';


const GuestLandingPage = (props) => {

    return (
        <div className='landingPage'>
            <h1>Welcome to GameWatchers !</h1>
            <h2>The heaven for Gamers</h2>
            <p>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Sofia'} />
            </p>
        </div>
    );
}

export default GuestLandingPage;