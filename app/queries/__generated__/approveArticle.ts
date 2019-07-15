/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: approveArticle
// ====================================================

export interface approveArticle_approveArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface approveArticle {
  approveArticle: approveArticle_approveArticle ;
}

export interface approveArticleVariables {
  id?: string ;
  version?: number ;
  signature?: string ;
}
