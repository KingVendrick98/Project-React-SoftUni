import React,{ useContext } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button,Card } from 'react-bootstrap';
import AuthContext from '../../contexts/auth';
import ReactImageAppear from 'react-image-appear'
const ProfilePage = (props) => {   

    const [user] = useContext(AuthContext);
    const { name, job ,email, address, phone } = user;
    const profilePic = user.profilePic

    return (
        <div>
            <div className="card-container">

                <div className="upper-container">
                    <h1>Profile</h1>
                    <Card  className="image-container" style={{ width: '18rem' , height:"10px" }}>
                    <ReactImageAppear  img src={profilePic} className="image-container "/>
                    </Card>
                </div>

                <div className="lower-container">
                    <div>
                        <h3> Username: {name} </h3>
                        <h5><i className="fas fa-briefcase"> Job: {job}</i></h5>
                        <h5><i className="fas fa-envelope"> email: {email}</i></h5>
                        <h5><i className="fas fa-home"> address: {address}</i></h5>
                        <h5><i className="fas fa-phone-alt"> Phone: {phone}</i></h5>
                    </div>
                    <div>
                        <Link to="/editProfile" className="btn"><Button variant="primary" type="button">Edit Profile</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;