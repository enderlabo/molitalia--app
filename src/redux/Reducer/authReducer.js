import { types } from "../types/types";


/* state
    code: xxx
    name: xxxx,
    lastName: xxx,
*/

const initialState = {
    nombre: '',
    apellidos: '',
    dni: '',

}


export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.authLogin:
            return {
            ...state,
            ...action.payload  
              
            }
        case types.logOut:
            return { }
        
    
        default:
            return state;
    }

}