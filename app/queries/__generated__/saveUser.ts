/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: saveUser
// ====================================================

export interface saveUser_saveUser {
  __typename: "MutationResponse";
  hash: string ;
}

export interface saveUser {
  saveUser: saveUser_saveUser ;
}

export interface saveUserVariables {
  username?: string ;
  name?: string ;
  title?: string ;
  website?: string ;
  avatar?: string ;
  email?: string ;
  social?: any ;
  subscriptions?: any ;
}
