/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: recordView
// ====================================================

export interface recordView_recordView {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface recordView {
  /**
   * Record a view against a resource. A buffer prevents to record more than one view per IP and per hour and per resource.
   * This operation can be performed anonymously.
   */
  recordView: recordView_recordView;
}

export interface recordViewVariables {
  resourceId: ResourceIdentifierInput;
}
