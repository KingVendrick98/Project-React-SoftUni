import React from 'react';
import './styles.css';
import Clock from 'react-live-clock';


const GuestLandingPage = (props) => {

    return (
        <div className='landingPage'>
            <h2>Welcome to GameWatchers !</h2>
            <h2>The heaven for Gamers</h2>
            <h2>
            <Clock format={"dddd, MMMM Do YYYY, h:mm:ss a"}  ticking={true} timezone={'Sofia'} />
           <p>Sofia/Bulgaria real time !</p> 
            </h2>
        </div>
    );
}

export default GuestLandingPage;