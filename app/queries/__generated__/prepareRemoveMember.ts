/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareRemoveMember
// ====================================================

export interface prepareRemoveMember_prepareRemoveMember {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
}

export interface prepareRemoveMember {
  prepareRemoveMember: prepareRemoveMember_prepareRemoveMember ;
}

export interface prepareRemoveMemberVariables {
  id?: string ;
  account?: string ;
}
