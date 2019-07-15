/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareCreateCommunity
// ====================================================

export interface prepareCreateCommunity_prepareCreateCommunity {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
  attributes: any ;
}

export interface prepareCreateCommunity {
  prepareCreateCommunity: prepareCreateCommunity_prepareCreateCommunity ;
}

export interface prepareCreateCommunityVariables {
  name?: string ;
  description?: string ;
  avatar?: string ;
  website?: string ;
  tags?: (string )[] ;
  social?: any ;
  attributes?: any ;
  invitations?: (InvitationInput )[] ;
}
