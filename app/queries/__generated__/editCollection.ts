/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editCollection
// ====================================================

export interface editCollection_createCollection {
  __typename: "MutationResponse";
  hash: string ;
}

export interface editCollection {
  createCollection: editCollection_createCollection ;
}

export interface editCollectionVariables {
  id?: string ;
  name?: string ;
  description?: string ;
  background?: string ;
  tags?: (string )[] ;
}
