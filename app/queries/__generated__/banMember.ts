/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: banMember
// ====================================================

export interface banMember_banMember {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface banMember {
  /**
   * Ban a basic member from a community
   * This operation can only be performed by a communinity admin.
   */
  banMember: banMember_banMember;
}

export interface banMemberVariables {
  id: string;
  userId: string;
}
