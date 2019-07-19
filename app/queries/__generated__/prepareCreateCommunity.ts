/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { InvitationInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareCreateCommunity
// ====================================================

export interface prepareCreateCommunity_prepareCreateCommunity {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
  attributes: any | null;
}

export interface prepareCreateCommunity {
  /**
   * Create a community (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a logged user
   */
  prepareCreateCommunity: prepareCreateCommunity_prepareCreateCommunity | null;
}

export interface prepareCreateCommunityVariables {
  name: string;
  description?: string | null;
  avatar?: string | null;
  website?: string | null;
  tags?: (string | null)[] | null;
  social?: any | null;
  attributes?: any | null;
  invitations?: (InvitationInput | null)[] | null;
}
