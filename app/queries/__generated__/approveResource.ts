/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: approveResource
// ====================================================

export interface approveResource_approveResource {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface approveResource {
  /**
   * Approve a pending curated resource to a community.
   * This operation can only be performed by a communinity moderator or admin.
   */
  approveResource: approveResource_approveResource | null;
}

export interface approveResourceVariables {
  id: string;
  resource: ResourceIdentifierInput;
}
