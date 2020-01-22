/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editDiscussion
// ====================================================

export interface editDiscussion_editDiscussion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editDiscussion {
  /**
   * Edit a discussion
   * This operation can only be performed by the author or a moderator.
   */
  editDiscussion: editDiscussion_editDiscussion;
}

export interface editDiscussionVariables {
  id: string;
  title: string;
  message: string;
  tags?: (string | null)[] | null;
}
