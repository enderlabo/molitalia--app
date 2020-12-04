import { fetchWithoutToken } from "../../helpers/fetch"
import { types } from "../types/types"



export const startLogin = ( rName, rCode ) => {

    return async() => {

        const resp = await fetchWithoutToken('authm', { rName, rCode }, 'POST');
        const body = await resp.json();

        // if( body.ok ) {
                
        // }
        
        console.log(body);
    }

    
}

export const logOut = () => ({
    type: types.logOut
})