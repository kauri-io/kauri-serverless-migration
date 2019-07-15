/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addComment
// ====================================================

export interface addComment_addComment {
  __typename: "MutationResponse";
  hash: string ;
}

export interface addComment {
  addComment: addComment_addComment ;
}

export interface addCommentVariables {
  parent?: ResourceIdentifierInput ;
  body?: string ;
}
