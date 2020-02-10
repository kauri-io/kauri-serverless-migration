/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteDiscussion
// ====================================================

export interface deleteDiscussion_deleteDiscussion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface deleteDiscussion {
  /**
   * Delete a discussion
   * This operation can only be performed by a moderator.
   */
  deleteDiscussion: deleteDiscussion_deleteDiscussion;
}

export interface deleteDiscussionVariables {
  id: string;
}
