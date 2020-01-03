/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: unbanMember
// ====================================================

export interface unbanMember_unbanMember {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface unbanMember {
  /**
   * Ban a basic member from a community
   * This operation can only be performed by a communinity admin.
   */
  unbanMember: unbanMember_unbanMember;
}

export interface unbanMemberVariables {
  id: string;
  userId: string;
}
