/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: unbookmark
// ====================================================

export interface unbookmark_unbookmark {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface unbookmark {
  /**
   * Unbookmark a resource
   */
  unbookmark: unbookmark_unbookmark;
}

export interface unbookmarkVariables {
  resourceId: ResourceIdentifierInput;
  folder?: string | null;
}
