/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: leaveCommunity
// ====================================================

export interface leaveCommunity_leaveCommunity {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface leaveCommunity {
  /**
   * Leave a community as basic member.
   * This operation can only be performed by a logged user.
   */
  leaveCommunity: leaveCommunity_leaveCommunity;
}

export interface leaveCommunityVariables {
  id: string;
}
