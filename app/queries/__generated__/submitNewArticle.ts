/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitNewArticle
// ====================================================

export interface submitNewArticle_submitNewArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface submitNewArticle {
  submitNewArticle: submitNewArticle_submitNewArticle ;
}

export interface submitNewArticleVariables {
  title?: string ;
  content?: string ;
  tags?: (string )[] ;
  attributes?: any ;
}
