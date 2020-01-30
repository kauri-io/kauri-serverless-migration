/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editComment
// ====================================================

export interface editComment_editComment {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editComment {
  /**
   * Edit a comment
   * This operation can only be performed by the comment's author
   */
  editComment: editComment_editComment;
}

export interface editCommentVariables {
  id: string;
  body: string;
}
