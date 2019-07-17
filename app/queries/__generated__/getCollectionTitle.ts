/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCollectionTitle
// ====================================================

export interface getCollectionTitle_getCollection {
  __typename: "CollectionDTO";
  /**
   * Collection name
   */
  name: string;
}

export interface getCollectionTitle {
  /**
   * Get a collection by ID
   * This operation can be performed anonymously
   */
  getCollection: getCollectionTitle_getCollection | null;
}

export interface getCollectionTitleVariables {
  id: string;
}
