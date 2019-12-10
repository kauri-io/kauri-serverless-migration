import gql from 'graphql-tag'

export const getUserDetails = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
            id
            username
            name
            title
            website
            avatar
            social
        }
    }
`

export const getUserByUsername = gql`
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            id
            username
            name
            title
            website
            avatar
            social
            articles(page: 0, size: 1) {
                totalElements
            }
            links(page: 0, size: 1) {
                totalElements
            }
            collections(page: 0, size: 1) {
                totalElements
            }
        }
    }
`
export const getOwnProfile = gql`
    query getMyProfile {
        getMyProfile {
            id
            email
            username
            name
            title
            website
            avatar
            social
            status
            communities {
                role
                community {
                    id
                    name
                    members {
                        id
                        role
                    }
                }
            }
            subscriptions
            dateCreated
            articles(page: 0, size: 1) {
                totalElements
            }
            collections(page: 0, size: 1) {
                totalElements
            }
        }
    }
`

export const saveUserMutation = gql`
    mutation saveUser(
        $username: String
        $name: String
        $title: String
        $website: String
        $avatar: String
        $email: String
        $social: Map_String_StringScalar
        $subscriptions: Map_String_BooleanScalar!
    ) {
        saveUser(
            name: $name
            username: $username
            avatar: $avatar
            title: $title
            website: $website
            social: $social
            email: $email
            subscriptions: $subscriptions
        ) {
            hash
        }
    }
`

export const regenerateEmailVerificationCode = gql`
    mutation regenerateEmailVerificationCode {
        regenerateEmailVerificationCode {
            hash
        }
    }
`

export const verifyEmail = gql`
    mutation verifyEmail($code: String!) {
        verifyEmail(code: $code) {
            hash
        }
    }
`

export const emailSubscribe = gql`
    mutation emailSubscribe(
        $emailAddress: String!
        $subscriptions: Map_String_BooleanScalar!
    ) {
        subscribe(email: $emailAddress, subscriptions: $subscriptions) {
            hash
        }
    }
`
