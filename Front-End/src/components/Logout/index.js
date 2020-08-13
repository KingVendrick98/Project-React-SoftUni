import React, { useContext } from 'react';
import userService from '../../services/userService';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = props => {
  // eslint-disable-next-line
  const [user, setUserStatus] = useContext(AuthContext);

  userService.logout()
    .then(() => {
        setUserStatus({loggedIn: false, userId: '', name: ''});
    })
    toast.success('You logged out !');
  return <Redirect to='/' />
};

export default Logout;