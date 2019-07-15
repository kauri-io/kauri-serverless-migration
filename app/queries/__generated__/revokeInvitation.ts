/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: revokeInvitation
// ====================================================

export interface revokeInvitation_revokeInvitation {
  __typename: "MutationResponse";
  hash: string ;
}

export interface revokeInvitation {
  revokeInvitation: revokeInvitation_revokeInvitation ;
}

export interface revokeInvitationVariables {
  signature?: string ;
  id?: string ;
  invitationId?: string ;
}
