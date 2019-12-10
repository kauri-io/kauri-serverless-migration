import gql from 'graphql-tag'
import { PublicUserView, PrivateUserView } from './Fragments'

export const getUserDetails = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
            ...PublicUserView
        }
    }
    ${PublicUserView}
`

export const getUserByUsername = gql`
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            ...PublicUserView
        }
    }
    ${PublicUserView}
`
export const getOwnProfile = gql`
    query getMyProfile {
        getMyProfile {
            ...PrivateUserView
        }
    }
    ${PrivateUserView}
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
