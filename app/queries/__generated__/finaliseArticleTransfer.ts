/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: finaliseArticleTransfer
// ====================================================

export interface finaliseArticleTransfer_finaliseArticleTransfer {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface finaliseArticleTransfer {
  /**
   * Finalise an article transfer (publish a new version).
   * This operation can only be performed by the recipient of the transfer.
   */
  finaliseArticleTransfer: finaliseArticleTransfer_finaliseArticleTransfer | null;
}

export interface finaliseArticleTransferVariables {
  id: string;
  signature: string;
}
