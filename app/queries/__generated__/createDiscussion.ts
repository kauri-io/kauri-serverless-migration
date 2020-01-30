/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createDiscussion
// ====================================================

export interface createDiscussion_createDiscussion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface createDiscussion {
  /**
   * Create a discussion
   * This operation can only be performed by a logged user.
   */
  createDiscussion: createDiscussion_createDiscussion;
}

export interface createDiscussionVariables {
  parent: ResourceIdentifierInput;
  title: string;
  message: string;
  tags?: (string | null)[] | null;
}
