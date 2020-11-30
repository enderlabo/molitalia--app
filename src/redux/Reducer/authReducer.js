

/* state
    code: xxx
    name: xxxx,
    lastName: xxx,
*/

import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
               code: action.payload.code,
               name: action.payload.name,
               lastname: action.payload.lastname  
            }
        case types.logOut:
            return { }
        
    
        default:
            return state;
    }

}