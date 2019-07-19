/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createCollection
// ====================================================

export interface createCollection_createCollection {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface createCollection {
  /**
   * Create or Edit a collection
   * This operation can only be performed by logged user (create) or the collection owner (edit)
   */
  createCollection: createCollection_createCollection | null;
}

export interface createCollectionVariables {
  name: string;
  description: string;
  background?: string | null;
  tags?: (string | null)[] | null;
  owner?: ResourceIdentifierInput | null;
}
