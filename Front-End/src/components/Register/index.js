import React, {Fragment, useState } from 'react';
import { Form, Button, Container, Row, Nav, FormGroup } from 'react-bootstrap';
import userService from '../../services/userService';
import registerValidator from '../../utils/registerValidator'


const Register = (props) => {

  const [profilePic, setProfilePic] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const updateProfilePic = e => {
    setProfilePic(e.target.value)
  }

  const updateName = e => {
    setUsername(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updateRePassword = e => {
    setRePassword(e.target.value);
  }

  const handleSubmit = () => {

    if (registerValidator(username, password, rePassword, profilePic)) {
      userService.register(username, password, profilePic).then(() => {
        props.history.push('/login');
      });
    }
  }

  return (
    <Fragment>
      <Container>
        <Form style={{ marginTop: '170px', textAlign: 'center' }}>
        <Form style={{textAlign: 'center' }}>
                <Row className="justify-content-md-center">
                   <h1>Sign up </h1> 
                </Row>
            </Form>
            <Row className="justify-content-md-center">
            <Form.Group>
              <Form.Label>Avatar:</Form.Label>
              <Form.Control type="text" name="profilePic" style={{ textAlign: 'center' }} placeholder="Avatar" onChange={updateProfilePic} />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" name="username" style={{ textAlign: 'center' }} placeholder="Enter Username" onChange={updateName} />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" style={{ textAlign: 'center' }} placeholder="Enter Password" onChange={updatePassword} />
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
            <Form.Group>
              <Form.Label>Repeat Password:</Form.Label>
              <Form.Control type="password" name="rePassword" style={{ textAlign: 'center' }} placeholder="Repeat Password" onChange={updateRePassword} />
              
            </Form.Group>
          </Row>
          <Row className="justify-content-md-center">
              <FormGroup>
              <Form.Text className="text-muted" style={{ textAlign: 'center' }}>
                Already have an account ?
                <Nav.Link href="/login">Login</Nav.Link>
              </Form.Text>
              </FormGroup>
          </Row>
          <Row className="justify-content-md-center">
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Register
            </Button>
          </Row>
        </Form>
      </Container>
    </Fragment>
  );
}

export default Register;