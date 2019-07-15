/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareSendInvitation
// ====================================================

export interface prepareSendInvitation_prepareSendInvitation {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
  attributes: any ;
}

export interface prepareSendInvitation {
  prepareSendInvitation: prepareSendInvitation_prepareSendInvitation ;
}

export interface prepareSendInvitationVariables {
  id?: string ;
  invitation?: InvitationInput ;
}
