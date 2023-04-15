import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://hardy-perch-29.hasura.app/v1/graphql',
    cache: new InMemoryCache,
    headers: {
        'x-hasura-admin-secret':
            'V6k0pM4SCSqpEluLa4YHVAwbttpc7ntp27ZtIzHL6MLnuHndG51TsW261U51JSfs'
    }
})

export default client;