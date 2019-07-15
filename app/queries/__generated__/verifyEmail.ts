/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyEmail
// ====================================================

export interface verifyEmail_verifyEmail {
  __typename: "MutationResponse";
  hash: string ;
}

export interface verifyEmail {
  verifyEmail: verifyEmail_verifyEmail ;
}

export interface verifyEmailVariables {
  code?: string ;
}
