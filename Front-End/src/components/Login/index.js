import React, { Fragment, useContext ,useState } from 'react';
import userService from '../../services/userService'
import loginValidator from '../../utils/loginValidator';
import { Form, Button, Container, Row, Nav, FormLabel } from 'react-bootstrap';
import { AuthContext } from '../../contexts/auth';
import './styles.css'

const Login = (props) => {

  // eslint-disable-next-line
  const [user,setUserStatus] = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateName = e => {
      setUsername(e.target.value);
  };

  const updatePassword = e => {
      setPassword(e.target.value);
  };

  const handleSubmit = e => {

      if (loginValidator(username, password)) {
          userService.login(username, password).then((info) => {
            
            const { job,email,address,phone } = info;
            setUserStatus({loggedIn: true, userId: info._id, name: username, job, email, address, phone})
            props.history.push('/latest');
          });
      }
  };

    return (
      <Fragment>
        <Container>
            
          <Form style={{ padding: '200px', textAlign: 'center' }}>
          <Form style={{textAlign: 'center' }}>
                <FormLabel className="justify-content-md-center">
                    Sign in 
                </FormLabel>
            </Form>
            <Row className="justify-content-md-center">
              <Form.Group controlId="formBasicEmail">
                <Form.Label  style={{ textJustify: 'center' , margin: '10'}}>Username:</Form.Label>
                <Form.Control type="text" name="username" style={{ textAlign: 'center', margin: '10' }} placeholder="Enter Username" onChange={updateName} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group>
                <Form.Label style={{ textJustify: 'center' }}>Password:</Form.Label>
                <Form.Control type="password" name="password" style={{ textAlign: 'center' }} placeholder="Enter Password" onChange={updatePassword} />
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
            <Form.Group>
            <Form.Text className="text-muted" style={{ textAlign: 'center' }}>
                  Don't have an account ?
                <Nav.Link href="/register">Register</Nav.Link>
                </Form.Text>
            </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Login
            </Button>
            </Row>
          </Form>
        </Container>
      </Fragment>
    );
  }
  
export default Login;