import gql from 'graphql-tag'

export const getEvent = gql`
    subscription getEvent($hash: String!) {
        getEvent(hash: $hash) {
            id
            name
            correlationId
            source
            output
            status
        }
    }
`
