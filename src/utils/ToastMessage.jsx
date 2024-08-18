import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToastMessage = (mssg) => {
    toast.success(mssg, {
      position: "top-right",
    });
}

export default useToastMessage;