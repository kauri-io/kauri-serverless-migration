/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitArticleVersion
// ====================================================

export interface submitArticleVersion_submitArticleVersion {
  __typename: "MutationResponse";
  hash: string | null;
}

export interface submitArticleVersion {
  submitArticleVersion: submitArticleVersion_submitArticleVersion | null;
}

export interface submitArticleVersionVariables {
  id?: string | null;
  subject?: string | null;
  text?: string | null;
  tags?: (string | null)[] | null;
  attributes?: any | null;
}
