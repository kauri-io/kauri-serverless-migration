/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitArticleVersion
// ====================================================

export interface submitArticleVersion_submitArticleVersion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface submitArticleVersion {
  /**
   * Submit a new article version
   * This operation can only be performed by logged user
   */
  submitArticleVersion: submitArticleVersion_submitArticleVersion | null;
}

export interface submitArticleVersionVariables {
  id: string;
  subject: string;
  text: string;
  tags?: (string | null)[] | null;
  attributes?: any | null;
}
