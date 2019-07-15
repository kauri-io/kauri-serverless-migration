/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareRevokeInvitation
// ====================================================

export interface prepareRevokeInvitation_prepareRevokeInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
}

export interface prepareRevokeInvitation {
  prepareRevokeInvitation: prepareRevokeInvitation_prepareRevokeInvitation ;
}

export interface prepareRevokeInvitationVariables {
  id?: string ;
  invitationId?: string ;
}
