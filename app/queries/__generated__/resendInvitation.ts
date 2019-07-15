/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resendInvitation
// ====================================================

export interface resendInvitation_resendInvitation {
  __typename: "MutationResponse";
  hash: string ;
}

export interface resendInvitation {
  resendInvitation: resendInvitation_resendInvitation ;
}

export interface resendInvitationVariables {
  id?: string ;
  invitationId?: string ;
  email?: string ;
}
