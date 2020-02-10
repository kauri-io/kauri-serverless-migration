/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: closeDiscussion
// ====================================================

export interface closeDiscussion_closeDiscussion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface closeDiscussion {
  /**
   * Close a discussion
   * This operation can only be performed by the author or a moderator.
   */
  closeDiscussion: closeDiscussion_closeDiscussion;
}

export interface closeDiscussionVariables {
  id: string;
}
