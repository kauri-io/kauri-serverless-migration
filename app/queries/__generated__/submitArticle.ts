/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitArticle
// ====================================================

export interface submitArticle_submitArticle {
  __typename: "MutationResponse";
  hash: string ;
}

export interface submitArticle {
  submitArticle: submitArticle_submitArticle ;
}

export interface submitArticleVariables {
  article_id?: string ;
  text?: string ;
  subject?: string ;
  tags?: (string )[] ;
  attributes?: any ;
  version?: number ;
}
