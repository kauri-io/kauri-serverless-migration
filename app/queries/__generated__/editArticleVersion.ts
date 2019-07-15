/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editArticleVersion
// ====================================================

export interface editArticleVersion_editArticleVersion {
  __typename: "MutationResponse";
  hash: string ;
}

export interface editArticleVersion {
  editArticleVersion: editArticleVersion_editArticleVersion ;
}

export interface editArticleVersionVariables {
  id?: string ;
  version?: number ;
  text?: string ;
  subject?: string ;
  tags?: (string )[] ;
  attributes?: any ;
}
