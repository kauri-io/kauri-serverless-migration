/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareAcceptInvitation
// ====================================================

export interface prepareAcceptInvitation_prepareAcceptInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareAcceptInvitation {
  /**
   * Accept an invitation (prepare call, return a meta-tx hash to sign) to be a granted member (admin, moderator)
   * This operation can only be performed by a logged user in possession of the invitation secret
   */
  prepareAcceptInvitation: prepareAcceptInvitation_prepareAcceptInvitation;
}

export interface prepareAcceptInvitationVariables {
  id: string;
  secret: string;
}
