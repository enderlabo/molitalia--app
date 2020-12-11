import { types } from "../types/types";


/* state
    code: xxx
    name: xxxx,
    lastName: xxx,
*/

const initialState = {
    dni: '',
    nombre: '',
    apellidos: '',

}


export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.authStartLogin:
            return {
           ...state,
           dni: action.payload,
           nombre: action.payload,
           apellidos: action.payload
              
            }
        case types.logOut:
            return { }
        
    
        default:
            return state;
    }

}