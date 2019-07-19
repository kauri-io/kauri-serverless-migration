/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: rejectArticle
// ====================================================

export interface rejectArticle_rejectArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface rejectArticle {
  /**
   * Reject a pending article version. If a non-owner publishes an article, the
   * article passes to a PENDING status, requiring an owner to approve/reject the version.
   * This operation can only be performed by the article owner
   */
  rejectArticle: rejectArticle_rejectArticle | null;
}

export interface rejectArticleVariables {
  id: string;
  version: number;
  cause?: string | null;
}
