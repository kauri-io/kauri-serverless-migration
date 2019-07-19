/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: publishArticle
// ====================================================

export interface publishArticle_publishArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface publishArticle {
  /**
   * Publish a draft article version.
   * This operation can only be performed by the author of the article
   */
  publishArticle: publishArticle_publishArticle | null;
}

export interface publishArticleVariables {
  id: string;
  version: number;
  owner?: ResourceIdentifierInput | null;
  signature: string;
  updateComment?: string | null;
}
