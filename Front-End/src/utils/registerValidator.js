import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function registerValidator(username, password, confirmPass, profilePic) {

  if(profilePic === '' || profilePic.length < 3) {
    toast.error('Avatar must be valid!');
    return false;
  }
  
  if(username === '' || username.length < 3) {
    toast.error('Username must be at least 3 characters long!');
    return false;
  }
  
  if(password.length < 8) {
    toast.error('Password must be at least 8 characters long!');
    return false;
  }
  
  if(password !== confirmPass) {
    toast.error('Passwords do not match!');
    return false;
  }
  
  toast.success('You registered successfully!');
  return true;
}

export default registerValidator;