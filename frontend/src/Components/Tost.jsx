import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Tost(message) {
    toast.info(message,{
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}