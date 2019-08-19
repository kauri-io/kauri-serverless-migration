/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: curateCommunityResources
// ====================================================

export interface curateCommunityResources_curateResources {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface curateCommunityResources {
  /**
   * Curate a resource to a community.
   * This operation can only be performed by a logged user (if performed by
   * community members, the resource is automatically approved and curated,
   * otherwise pending approval)
   */
  curateResources: curateCommunityResources_curateResources;
}

export interface curateCommunityResourcesVariables {
  id: string;
  resources: (ResourceIdentifierInput | null)[];
}
