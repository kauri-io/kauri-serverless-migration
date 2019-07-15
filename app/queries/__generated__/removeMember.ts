/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMember
// ====================================================

export interface removeMember_removeMember {
  __typename: "MutationResponse";
  hash: string ;
}

export interface removeMember {
  removeMember: removeMember_removeMember ;
}

export interface removeMemberVariables {
  signature?: string ;
  id?: string ;
  account?: string ;
}
