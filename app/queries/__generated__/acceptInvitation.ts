/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptInvitation
// ====================================================

export interface acceptInvitation_acceptInvitation {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface acceptInvitation {
  /**
   * Accept an invitation (execute call).
   * This operation can only be performed by a community admin
   */
  acceptInvitation: acceptInvitation_acceptInvitation | null;
}

export interface acceptInvitationVariables {
  signature: string;
  id: string;
  secret: string;
}
