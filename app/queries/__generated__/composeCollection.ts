/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SectionDTOInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: composeCollection
// ====================================================

export interface composeCollection_composeCollection {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface composeCollection {
  /**
   * Compose a collection with sections and articles
   * This operation can only be performed by the collection owner.
   */
  composeCollection: composeCollection_composeCollection;
}

export interface composeCollectionVariables {
  id: string;
  sections: (SectionDTOInput | null)[];
}
