/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: checkpointArticles
// ====================================================

export interface checkpointArticles_checkpointArticles {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface checkpointArticles {
  /**
   * Trigger the checkpointer to find non-checkpointed articles, organize them into a merkle tree and store the file on IPFS.
   * This operation can only be performed by logged user
   */
  checkpointArticles: checkpointArticles_checkpointArticles;
}
