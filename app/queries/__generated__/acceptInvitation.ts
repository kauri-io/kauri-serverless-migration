/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptInvitation
// ====================================================

export interface acceptInvitation_acceptInvitation {
  __typename: "MutationResponse";
  hash: string ;
}

export interface acceptInvitation {
  acceptInvitation: acceptInvitation_acceptInvitation ;
}

export interface acceptInvitationVariables {
  signature?: string ;
  id?: string ;
  secret?: string ;
}
