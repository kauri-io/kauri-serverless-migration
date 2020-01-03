/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resendInvitation
// ====================================================

export interface resendInvitation_resendInvitation {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface resendInvitation {
  /**
   * Resend a pending invitation to be a granted member (admin, moderator)
   * This operation can only be performed by a community admin
   */
  resendInvitation: resendInvitation_resendInvitation;
}

export interface resendInvitationVariables {
  id: string;
  invitationId: string;
  email: string;
}
