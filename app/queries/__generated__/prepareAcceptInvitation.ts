/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareAcceptInvitation
// ====================================================

export interface prepareAcceptInvitation_prepareAcceptInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
}

export interface prepareAcceptInvitation {
  prepareAcceptInvitation: prepareAcceptInvitation_prepareAcceptInvitation ;
}

export interface prepareAcceptInvitationVariables {
  id?: string ;
  secret?: string ;
}
