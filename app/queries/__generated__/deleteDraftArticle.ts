/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteDraftArticle
// ====================================================

export interface deleteDraftArticle_cancelArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface deleteDraftArticle {
  /**
   * Delete one of your draft articles
   * This operation can only be performed by the article author
   */
  cancelArticle: deleteDraftArticle_cancelArticle;
}

export interface deleteDraftArticleVariables {
  id: string;
  version: number;
}
