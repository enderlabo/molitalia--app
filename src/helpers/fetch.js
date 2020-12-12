
const baseUrl = 'https://magicanavidad.molitalia.com.pe/api';

export const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url,  {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        });
    }

}

