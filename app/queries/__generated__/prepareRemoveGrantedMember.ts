/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareRemoveGrantedMember
// ====================================================

export interface prepareRemoveGrantedMember_prepareRemoveGrantedMember {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareRemoveGrantedMember {
  /**
   * Remove a granted member (admin/moderator) from the community (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareRemoveGrantedMember: prepareRemoveGrantedMember_prepareRemoveGrantedMember;
}

export interface prepareRemoveGrantedMemberVariables {
  id: string;
  account: string;
}
