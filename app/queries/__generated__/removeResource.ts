/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: removeResource
// ====================================================

export interface removeResource_removeResource {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface removeResource {
  /**
   * Remove an approved or pending curated resource from a community.
   * This operation can only be performed by a communinity moderator or admin.
   */
  removeResource: removeResource_removeResource | null;
}

export interface removeResourceVariables {
  id: string;
  resource: ResourceIdentifierInput;
}
