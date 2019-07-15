/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: rejectArticle
// ====================================================

export interface rejectArticle_rejectArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface rejectArticle {
  rejectArticle: rejectArticle_rejectArticle ;
}

export interface rejectArticleVariables {
  id?: string ;
  version?: number ;
  cause?: string ;
}
