/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: sendInvitation
// ====================================================

export interface sendInvitation_sendInvitation {
  __typename: "MutationResponse";
  hash: string ;
}

export interface sendInvitation {
  sendInvitation: sendInvitation_sendInvitation ;
}

export interface sendInvitationVariables {
  signature?: string ;
  id?: string ;
  invitation?: InvitationInput ;
}
