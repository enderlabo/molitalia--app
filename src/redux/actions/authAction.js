import { types } from "../types/types"



export const startLogin = ( rCode, rName ) => {

    return {
        type: types.authStartLogin,
        payload: {
            rCode,
            rName,
            
        }
    }
}

export const logOut = () => ({
    type: types.logOut
})