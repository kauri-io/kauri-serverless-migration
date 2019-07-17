/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: rejectArticleTransfer
// ====================================================

export interface rejectArticleTransfer_rejectArticleTransfer {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface rejectArticleTransfer {
  /**
   * Reject an article transfer.
   * This operation can only be performed by the recipient of the transfer.
   */
  rejectArticleTransfer: rejectArticleTransfer_rejectArticleTransfer | null;
}

export interface rejectArticleTransferVariables {
  id: string;
}
