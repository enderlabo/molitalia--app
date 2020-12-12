import Swal from 'sweetalert2';


export const sweetAlert = () => {

    return(
        Swal.fire({
            title: 'Llene el formulario.',
            icon: 'warning',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: false,
            timer: 1500
          })
    )
}

export const sweetErrorName = () => {

    return(
        Swal.fire({
            icon: 'error',
            title: 'Su Apellido Paterno es requerido.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            showConfirmButton: false,
            timer: 1500
          })
    )
}

export const sweetErrorLastName = () => {

    return(
        Swal.fire({
            icon: 'error',
            title: 'Su Apellido Materno es requerido.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            showConfirmButton: false,
            timer: 1500
          })
    )
}

export const sweetErrorCode = () => {

    return(
        Swal.fire({
            icon: 'error',
            title: 'Su DNI es requerido.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            showConfirmButton: false,
            timer: 1500
          })
    )
}

