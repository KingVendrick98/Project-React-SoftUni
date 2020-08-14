import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function profileValidator(job, email, address, phone) {

    if (job === '' || job.length < 6) {
        toast.error('Job must be at least 6 characters long !');
        return false;
    }

    if(email === '' || !email.includes('@') || email.length < 6){
        toast.error('Email must contain @ and be more than 6 characters !');
        return false;
    }

    if(address === '' || address.length < 10){
        toast.error('Address must be at least 10 characters long !');
        return false;
    }

    if(phone === '' || phone.length < 8){
        toast.error('Phone must be at least 8 characters long !');
        return false;
    }

    toast.success('Edited successful !');
    return true;
}

export default profileValidator;