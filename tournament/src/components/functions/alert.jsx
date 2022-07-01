import Swal from 'sweetalert2';

export default function AlertMessage(message, status) {
  if (status === 'error') {
    Swal.fire('Something went wrong!', `${message}`, `${status}`);
  } else {
    Swal.fire('Succes!', `${message}`, `${status}`);
  }
}
