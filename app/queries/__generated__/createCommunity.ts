/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createCommunity
// ====================================================

export interface createCommunity_createCommunity {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface createCommunity {
  /**
   * Create a community (excute call).
   * This operation can only be performed by a logged user
   */
  createCommunity: createCommunity_createCommunity | null;
}

export interface createCommunityVariables {
  signature: string;
  name: string;
  description?: string | null;
  avatar?: string | null;
  website?: string | null;
  tags?: (string | null)[] | null;
  social?: any | null;
  attributes?: any | null;
  invitations?: (InvitationInput | null)[] | null;
}
