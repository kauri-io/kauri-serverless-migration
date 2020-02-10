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
   * Remove a basic member from a community
   * This operation can only be performed by a communinity admin.
   */
  removeMember: removeMember_removeMember;
}

export interface removeMemberVariables {
  id: string;
  userId: string;
}
