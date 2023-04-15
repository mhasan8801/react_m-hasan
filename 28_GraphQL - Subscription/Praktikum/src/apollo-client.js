import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws'
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities"

const httpLink = new HttpLink({
    uri: 'https://hardy-perch-29.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret':
            'V6k0pM4SCSqpEluLa4YHVAwbttpc7ntp27ZtIzHL6MLnuHndG51TsW261U51JSfs'
    }
})

const wsLink = new WebSocketLink({
    uri: 'https://hardy-perch-29.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                'x-hasura-admin-secret':
                    'V6k0pM4SCSqpEluLa4YHVAwbttpc7ntp27ZtIzHL6MLnuHndG51TsW261U51JSfs'
            }
        }
    }
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === "OperationDefinition" && definition.operation === "subscription"
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    // uri: 'https://hardy-perch-29.hasura.app/v1/graphql',
    link: splitLink,
    cache: new InMemoryCache,
    // headers: {
    //     'x-hasura-admin-secret':
    //         'V6k0pM4SCSqpEluLa4YHVAwbttpc7ntp27ZtIzHL6MLnuHndG51TsW261U51JSfs'
    // }
})

export default client;