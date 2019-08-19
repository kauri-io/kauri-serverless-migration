/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareRemoveMember
// ====================================================

export interface prepareRemoveMember_prepareRemoveMember {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareRemoveMember {
  /**
   * Remove a member from the community (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareRemoveMember: prepareRemoveMember_prepareRemoveMember;
}

export interface prepareRemoveMemberVariables {
  id: string;
  account: string;
}
