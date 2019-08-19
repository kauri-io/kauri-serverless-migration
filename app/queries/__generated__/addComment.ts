/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addComment
// ====================================================

export interface addComment_addComment {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface addComment {
  /**
   * Add a comment on a resource
   * This operation can only be performed by a logged user.
   */
  addComment: addComment_addComment;
}

export interface addCommentVariables {
  parent: ResourceIdentifierInput;
  body: string;
}
