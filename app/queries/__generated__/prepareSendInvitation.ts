/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareSendInvitation
// ====================================================

export interface prepareSendInvitation_prepareSendInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
  attributes: any | null;
}

export interface prepareSendInvitation {
  /**
   * Send an invitation to join te community as a granted member [admin/moderator] 
   * (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareSendInvitation: prepareSendInvitation_prepareSendInvitation;
}

export interface prepareSendInvitationVariables {
  id: string;
  invitation: InvitationInput;
}
