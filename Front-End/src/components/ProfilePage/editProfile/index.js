/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { Fragment, useState, useContext } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import userService from '../../../services/userService';
import AuthContext from '../../../contexts/auth';
import profileValidator from '../../../utils/editProfileValidator';
import './styles.css'

const editProfile = (props) => {

    const [user, setUserStatus] = useContext(AuthContext);

    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
  
    const updateJob = e => {
        setJob(e.target.value);
    }

    const updateEmail = e => {
        setEmail(e.target.value);
    };

    const updateAddress = e => {
        setAddress(e.target.value);
    };

    const updatePhone = e => {
        setPhone(e.target.value);
    }

    const handleSubmit = () => {

        if (profileValidator(job, email, address, phone)) {

            userService.edit(user.userId, job, email, address, phone).then(() => {
                setUserStatus({ loggedIn: true, userId: user.userId, name: user.name, job, email, address, phone });
            }).then(() => {
                props.history.push('/profile');
            });
        }
    }

    return (
        <Fragment>
            <Container>
                {/* <button id="upload_widget" onClick={() => myWidget.open()} className="cloudinary-button">Upload avatar</button> */}
                <Form style={{ marginTop: '150px', textAlign: 'center' }}>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label style={{ margin: '10'}}>Job:</Form.Label>
                            <Form.Control type="text" name="job" style={{ textAlign: 'center',margin: '10' }} placeholder="Enter job" onChange={updateJob} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label style={{ margin: '10'}}>Email:</Form.Label>
                            <Form.Control type="text" name="email" style={{ textAlign: 'center',margin: '10' }} placeholder="Enter email" onChange={updateEmail} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label style={{ margin: '10'}}>Address:</Form.Label>
                            <Form.Control type="text" name="address" style={{ textAlign: 'center',margin: '10' }} placeholder="Enter address" onChange={updateAddress} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Form.Group>
                            <Form.Label style={{ margin: '10'}}>Phone:</Form.Label>
                            <Form.Control type="text" name="phone" style={{ textAlign: 'center',margin: '10' }} placeholder="Enter phone number" onChange={updatePhone} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Edit Profile
                        </Button>
                    </Row>
                </Form>
            </Container>
        </Fragment>
    );
}

export default editProfile;