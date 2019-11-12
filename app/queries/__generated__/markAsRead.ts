/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: markAsRead
// ====================================================

export interface markAsRead_markAsRead {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface markAsRead {
  /**
   * Mark a resource as read
   */
  markAsRead: markAsRead_markAsRead;
}

export interface markAsReadVariables {
  resourceId: ResourceIdentifierInput;
}
