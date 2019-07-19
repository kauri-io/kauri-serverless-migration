/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: sendInvitation
// ====================================================

export interface sendInvitation_sendInvitation {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface sendInvitation {
  /**
   * Send an invitation to join te community (execute call).
   * This operation can only be performed by a community admin
   */
  sendInvitation: sendInvitation_sendInvitation | null;
}

export interface sendInvitationVariables {
  signature: string;
  id: string;
  invitation: InvitationInput;
}
