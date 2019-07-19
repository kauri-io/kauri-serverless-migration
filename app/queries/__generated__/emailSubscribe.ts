/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSubscribe
// ====================================================

export interface emailSubscribe_subscribe {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface emailSubscribe {
  /**
   * Opt-in/Opt-out to a list of subscriptions (newsletter)
   */
  subscribe: emailSubscribe_subscribe | null;
}

export interface emailSubscribeVariables {
  emailAddress: string;
  subscriptions: any;
}
