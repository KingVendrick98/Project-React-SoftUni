import React from 'react';
import './styles.css'
import { Nav } from 'react-bootstrap';


const AboutPage = () => {
    return (
        <div className="about">
            <h1>What is GameWatchers ?</h1>
            <h2>
                Firstly Welcome!<br/>
                GameWatchers is a website created for gaming community and people who are passionate about games,<br/> consoles, PC configurations and cetera .
                Here you can be a part of a growing community and read about different and interesting topics !<br/>
                You can create posts and write about the things that interests you most or you can read on other people posts, learn new things.<br/>
                We hope you enjoy your stay!
            </h2>

            <h1>From GameWatchers creators</h1>

    <Nav.Link href="/register"><h2>Excited ? Join us !</h2></Nav.Link>
        </div>
        
    );
}

export default AboutPage;