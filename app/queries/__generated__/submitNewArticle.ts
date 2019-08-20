/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitNewArticle
// ====================================================

export interface submitNewArticle_submitNewArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface submitNewArticle {
  /**
   * Submit a new article
   * This operation can only be performed by logged user
   */
  submitNewArticle: submitNewArticle_submitNewArticle;
}

export interface submitNewArticleVariables {
  title: string;
  content: string;
  tags?: (string | null)[] | null;
  attributes?: any | null;
}
