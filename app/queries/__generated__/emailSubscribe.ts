/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSubscribe
// ====================================================

export interface emailSubscribe_subscribe {
  __typename: "MutationResponse";
  hash: string ;
}

export interface emailSubscribe {
  subscribe: emailSubscribe_subscribe ;
}

export interface emailSubscribeVariables {
  emailAddress?: string ;
  subscriptions?: any ;
}
