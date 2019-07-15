/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SectionDTOInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: composeCollection
// ====================================================

export interface composeCollection_composeCollection {
  __typename: "MutationResponse";
  hash: string ;
}

export interface composeCollection {
  composeCollection: composeCollection_composeCollection ;
}

export interface composeCollectionVariables {
  id?: string ;
  sections?: (SectionDTOInput )[] ;
}
