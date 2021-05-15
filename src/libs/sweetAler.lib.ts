import Swal, { SweetAlertResult, SweetAlertIcon } from 'sweetalert2';
import Toast from 'sweetalert2';

class SweetAlert {
  public simpleAlert = (
    title: string,
    subTitle: string,
    icon: SweetAlertIcon,
    requestFunction?: any
  ) => {
    return Swal.fire(title, subTitle, icon).then(() => {
      if (requestFunction !== undefined) {
        requestFunction();
      }
    });
  };

  public confirmAlert = (
    title: string,
    subTitle: string,
    icon: SweetAlertIcon,
    requestFunction: any
  ) => {
    return Swal.fire({
      title,
      text: subTitle,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result: SweetAlertResult) => {
      if (result.value) {
        requestFunction();
      }
    });
  };

  public Toast = (
    icon: SweetAlertIcon,
    title: string
    // requestFunction: any
  ) => {
    return Toast.fire({
      icon,
      title,
      toast: true,
      showConfirmButton: false,
      timer: 4500,
      timerProgressBar: false,
      position: 'top-end',
      width: 450,
      background: '#fff',
      showClass: {
        popup: ''
      }
    });
  };
}

export default new SweetAlert();