/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMember
// ====================================================

export interface removeMember_removeMember {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface removeMember {
  /**
   * Remove a member from the community (execute call).
   * This operation can only be performed by a community admin
   */
  removeMember: removeMember_removeMember;
}

export interface removeMemberVariables {
  signature: string;
  id: string;
  account: string;
}
