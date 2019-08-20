/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: saveUser
// ====================================================

export interface saveUser_saveUser {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface saveUser {
  /**
   * Save user profile.
   * This operation can only be performed by a logged user.
   */
  saveUser: saveUser_saveUser;
}

export interface saveUserVariables {
  username?: string | null;
  name?: string | null;
  title?: string | null;
  website?: string | null;
  avatar?: string | null;
  email?: string | null;
  social?: any | null;
  subscriptions: any;
}
