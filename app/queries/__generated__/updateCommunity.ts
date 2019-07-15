/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SectionDTOInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateCommunity
// ====================================================

export interface updateCommunity_editCommunity {
  __typename: "MutationResponse";
  hash: string ;
}

export interface updateCommunity {
  editCommunity: updateCommunity_editCommunity ;
}

export interface updateCommunityVariables {
  id?: string ;
  name?: string ;
  description?: string ;
  avatar?: string ;
  website?: string ;
  tags?: (string )[] ;
  social?: any ;
  attributes?: any ;
  homepage?: (SectionDTOInput )[] ;
}
