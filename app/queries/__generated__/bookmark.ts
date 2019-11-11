/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: bookmark
// ====================================================

export interface bookmark_bookmark {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface bookmark {
  /**
   * Bookmark a resource
   */
  bookmark: bookmark_bookmark;
}

export interface bookmarkVariables {
  resourceId: ResourceIdentifierInput;
  folder?: string | null;
}
