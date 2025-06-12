import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { API_URL } from './urls'
import excludedRoutes from './excluded-routes'
import { onLogout } from '../utils/logout'

//const logoutLink = onError((error) => {
    // if(error.graphQLErrors?.length && (error.graphQLErrors[0].extensions.originalError as any).statusCode === 401){
    //     if(!excludedRoutes.includes.(window.location.pathname)){
    //         router.navigate('/login')
    //     }
    // }
//});

const logoutLink = onError((error) => {

    function hasStatusCode(err: unknown): err is { statusCode: number } {
        return typeof err === 'object' && err !== null && 'statusCode' in err && typeof (err as any).statusCode === 'number';
    }

    const originalError = error.graphQLErrors?.[0]?.extensions?.originalError;

    if (hasStatusCode(originalError) && originalError.statusCode === 401) {
        if (!excludedRoutes.includes(window.location.pathname)) {
            onLogout();
        }
    }
});

const httpLink = new HttpLink({uri: `${API_URL}/graphql`})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: logoutLink.concat(httpLink)
});

export default client