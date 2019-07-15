/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitArticleVersion
// ====================================================

export interface submitArticleVersion_submitArticleVersion {
  __typename: "MutationResponse";
  hash: string ;
}

export interface submitArticleVersion {
  submitArticleVersion: submitArticleVersion_submitArticleVersion ;
}

export interface submitArticleVersionVariables {
  id?: string ;
  subject?: string ;
  text?: string ;
  tags?: (string )[] ;
  attributes?: any ;
}
