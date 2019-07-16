/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteDraftArticle
// ====================================================

export interface deleteDraftArticle_cancelArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface deleteDraftArticle {
  cancelArticle: deleteDraftArticle_cancelArticle ;
}

export interface deleteDraftArticleVariables {
  id?: string ;
  version?: number ;
}
