/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editCollection
// ====================================================

export interface editCollection_createCollection {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editCollection {
  /**
   * Create or Edit a collection
   * This operation can only be performed by logged user (create) or the collection owner (edit)
   */
  createCollection: editCollection_createCollection | null;
}

export interface editCollectionVariables {
  id: string;
  name: string;
  description: string;
  background?: string | null;
  tags?: (string | null)[] | null;
}
