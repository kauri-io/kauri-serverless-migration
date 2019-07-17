/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addArticleToCollection
// ====================================================

export interface addArticleToCollection_addCollectionResource {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface addArticleToCollection {
  /**
   * Add a resource into a section
   * This operation can only be performed by the collection owner.
   */
  addCollectionResource: addArticleToCollection_addCollectionResource | null;
}

export interface addArticleToCollectionVariables {
  id: string;
  sectionId: string;
  resourceId: ResourceIdentifierInput;
  position?: number | null;
}
