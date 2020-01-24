/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeGrantedMember
// ====================================================

export interface removeGrantedMember_removeGrantedMember {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface removeGrantedMember {
  /**
   * Remove a member from the community (execute call).
   * This operation can only be performed by a community admin
   */
  removeGrantedMember: removeGrantedMember_removeGrantedMember;
}

export interface removeGrantedMemberVariables {
  signature: string;
  id: string;
  account: string;
}
