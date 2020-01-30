/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteComment
// ====================================================

export interface deleteComment_deleteComment {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface deleteComment {
  /**
   * Delete a comment
   * This operation can only be performed by the comment's author.
   */
  deleteComment: deleteComment_deleteComment;
}

export interface deleteCommentVariables {
  id: string;
}
