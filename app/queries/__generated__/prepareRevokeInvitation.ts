/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: prepareRevokeInvitation
// ====================================================

export interface prepareRevokeInvitation_prepareRevokeInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareRevokeInvitation {
  /**
   * Revoke a pending invitation (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareRevokeInvitation: prepareRevokeInvitation_prepareRevokeInvitation | null;
}

export interface prepareRevokeInvitationVariables {
  id: string;
  invitationId: string;
}
