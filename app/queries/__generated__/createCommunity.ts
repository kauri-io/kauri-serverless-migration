/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createCommunity
// ====================================================

export interface createCommunity_createCommunity {
  __typename: "MutationResponse";
  hash: string ;
}

export interface createCommunity {
  createCommunity: createCommunity_createCommunity ;
}

export interface createCommunityVariables {
  signature?: string ;
  name?: string ;
  description?: string ;
  avatar?: string ;
  website?: string ;
  tags?: (string )[] ;
  social?: any ;
  attributes?: any ;
  invitations?: (InvitationInput )[] ;
}
