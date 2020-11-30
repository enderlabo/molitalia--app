import { types } from "../types/types"



export const login = ( code, name, lastname ) => {

    return {
        type: types.login,
        payload: {
            code,
            name,
            lastname
        }
    }
}

export const logOut = () => ({
    type: types.logOut
})