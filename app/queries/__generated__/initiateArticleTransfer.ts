/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: initiateArticleTransfer
// ====================================================

export interface initiateArticleTransfer_initiateArticleTransfer {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface initiateArticleTransfer {
  /**
   * Initialise an article transfer.
   * This operation can only be performed by the article owner
   */
  initiateArticleTransfer: initiateArticleTransfer_initiateArticleTransfer | null;
}

export interface initiateArticleTransferVariables {
  id: string;
  recipient: ResourceIdentifierInput;
}
