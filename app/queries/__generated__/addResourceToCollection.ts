/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addResourceToCollection
// ====================================================

export interface addResourceToCollection_addCollectionResource {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface addResourceToCollection {
  /**
   * Add a resource into a section
   * This operation can only be performed by the collection owner.
   */
  addCollectionResource: addResourceToCollection_addCollectionResource;
}

export interface addResourceToCollectionVariables {
  id: string;
  sectionId: string;
  resourceId: ResourceIdentifierInput;
  position?: number | null;
}
