/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createCollection
// ====================================================

export interface createCollection_createCollection {
  __typename: "MutationResponse";
  hash: string ;
}

export interface createCollection {
  createCollection: createCollection_createCollection ;
}

export interface createCollectionVariables {
  name?: string ;
  description?: string ;
  background?: string ;
  tags?: (string )[] ;
  owner?: ResourceIdentifierInput ;
}
