/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyEmail
// ====================================================

export interface verifyEmail_verifyEmail {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface verifyEmail {
  /**
   * Action to verify an email (open the verification link sent by email)
   * This operation can only be performed by a logged user.
   */
  verifyEmail: verifyEmail_verifyEmail | null;
}

export interface verifyEmailVariables {
  code: string;
}
