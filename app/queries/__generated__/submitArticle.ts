/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitArticle
// ====================================================

export interface submitArticle_submitArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface submitArticle {
  /**
   * Submit an draft article
   * This operation can only be performed by logged user
   */
  submitArticle: submitArticle_submitArticle;
}

export interface submitArticleVariables {
  article_id?: string | null;
  text: string;
  subject: string;
  tags?: (string | null)[] | null;
  attributes?: any | null;
  version: number;
}
