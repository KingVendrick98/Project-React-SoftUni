import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function signInValidator(username, password) {

  if(username === '' || username.length < 3) {
    toast.error('Username must be at least 3 characters long !');
    return false;
  }
  
  if(password === '' || password.length < 8) {
    toast.error('Password must be at least 8 characters long !');
    return false;
  }

  toast.success('You are logged in !');
  return true;
}

export default signInValidator;