
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url,  {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }



}