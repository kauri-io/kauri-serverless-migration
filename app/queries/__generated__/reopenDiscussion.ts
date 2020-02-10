/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reopenDiscussion
// ====================================================

export interface reopenDiscussion_reopenDiscussion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface reopenDiscussion {
  /**
   * Reopen a closed discussion
   * This operation can only be performed by the author or a moderator.
   */
  reopenDiscussion: reopenDiscussion_reopenDiscussion;
}

export interface reopenDiscussionVariables {
  id: string;
}
