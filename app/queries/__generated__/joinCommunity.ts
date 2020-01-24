/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: joinCommunity
// ====================================================

export interface joinCommunity_joinCommunity {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface joinCommunity {
  /**
   * Join a community as basic member.
   * This operation can only be performed by a logged user.
   */
  joinCommunity: joinCommunity_joinCommunity;
}

export interface joinCommunityVariables {
  id: string;
}
