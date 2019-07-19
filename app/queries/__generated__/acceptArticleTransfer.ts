/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptArticleTransfer
// ====================================================

export interface acceptArticleTransfer_acceptArticleTransfer {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface acceptArticleTransfer {
  /**
   * Accept an article transfer.
   * This operation can only be performed by the recipient of the transfer.
   */
  acceptArticleTransfer: acceptArticleTransfer_acceptArticleTransfer | null;
}

export interface acceptArticleTransferVariables {
  id: string;
}
