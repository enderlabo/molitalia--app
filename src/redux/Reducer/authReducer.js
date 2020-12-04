import { types } from "../types/types";


/* state
    code: xxx
    name: xxxx,
    lastName: xxx,
*/

const initialState = {
    Checking: true
}


export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        // case types.authStartLogin:
        //     return {
              
        //     //    lastname: action.payload.lastname  
        //     }
        // case types.logOut:
        //     return { }
        
    
        default:
            return state;
    }

}