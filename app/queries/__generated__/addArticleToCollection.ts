/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addArticleToCollection
// ====================================================

export interface addArticleToCollection_addCollectionResource {
  __typename: "MutationResponse";
  hash: string ;
}

export interface addArticleToCollection {
  addCollectionResource: addArticleToCollection_addCollectionResource ;
}

export interface addArticleToCollectionVariables {
  id?: string ;
  sectionId?: string ;
  resourceId?: ResourceIdentifierInput ;
  position?: number ;
}
