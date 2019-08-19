/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: approveArticle
// ====================================================

export interface approveArticle_approveArticle {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface approveArticle {
  /**
   * Approve a pending article version. If a non-owner publishes an article, the
   * article passes to a PENDING status, requiring an owner to approve/reject the version.
   * This operation can only be performed by the article owner
   */
  approveArticle: approveArticle_approveArticle;
}

export interface approveArticleVariables {
  id: string;
  version: number;
  signature: string;
}
