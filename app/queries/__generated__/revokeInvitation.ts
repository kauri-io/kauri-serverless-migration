/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: revokeInvitation
// ====================================================

export interface revokeInvitation_revokeInvitation {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface revokeInvitation {
  /**
   * Revoke a pending invitation (execute call).
   * This operation can only be performed by a community admin
   */
  revokeInvitation: revokeInvitation_revokeInvitation;
}

export interface revokeInvitationVariables {
  signature: string;
  id: string;
  invitationId: string;
}
