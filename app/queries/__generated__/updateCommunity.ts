/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SectionDTOInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCommunity
// ====================================================

export interface updateCommunity_editCommunity {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface updateCommunity {
  /**
   * Edit a community.
   * This operation can only be performed by a community ADMIN
   */
  editCommunity: updateCommunity_editCommunity;
}

export interface updateCommunityVariables {
  id: string;
  name: string;
  description?: string | null;
  avatar?: string | null;
  website?: string | null;
  tags?: (string | null)[] | null;
  social?: any | null;
  attributes?: any | null;
  homepage?: (SectionDTOInput | null)[] | null;
}
