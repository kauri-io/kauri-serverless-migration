/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: publishArticle
// ====================================================

export interface publishArticle_publishArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface publishArticle {
  publishArticle: publishArticle_publishArticle ;
}

export interface publishArticleVariables {
  id?: string ;
  version?: number ;
  owner?: ResourceIdentifierInput ;
  signature?: string ;
  updateComment?: string ;
}
