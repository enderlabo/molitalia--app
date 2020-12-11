import { fetchWithoutToken } from "../../helpers/fetch"
import { types } from "../types/types"

const baseUrl = 'https://magicanavidad.molitalia.com.pe/api';


export const startLogin = ( rCode, rName, rLastName ) => {

    return async() => {
      
        let data = { rCode,  rName, rLastName }
        
        // const formData = new FormData();
        // formData.append('dni', rCode );
        // formData.append('nombre', rName);
        // formData.append('apellidos', rLastName);
    
        let response = await fetch(`${baseUrl}/registro`, {
            method: 'POST',
            body: data,
            success: function(response) {
                console.log(response);
            }
             
        }).then(response => response.json() );
        // const resp = await fetchWithoutToken('registro', { rName, rLastName, rCode }, 'POST');
        console.log(response)
        console.log(data);
         return response
    }
    
}

export const logOut = () => ({
    type: types.logOut
})

// return async() => {

//     const formData = new FormData();
//     formData.append('nombre', rName);
//     formData.append('apellidos', rLastName);
//     formData.append('dni', rCode);

// //     $(function() {

// // var dni = "70077654";
// // var nombre = "Test";
// // var apellido = "PRueba";

// // $.ajax({
// //     url: "https://magicanavidad.molitalia.com.pe/api/registro",
// //     method: "POST",
// //     data: {
// //         "dni": dni,
// //         "nombre": nombre,
// //         "apellido": apellido
// //     },
// //     success: function(response) {
// //         console.log(response);
// //     }
// // })




//     const resp = await fetchWithoutToken('registro', { rName, rLastName, rCode }, 'POST');
//     const body = await resp;

//     // if( body.ok ) {
            
//     // }
    
//     console.log(body);
// }