/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: approveResource
// ====================================================

export interface approveResource_approveResource {
  __typename: "MutationResponse";
  hash: string ;
}

export interface approveResource {
  approveResource: approveResource_approveResource ;
}

export interface approveResourceVariables {
  id?: string ;
  resource?: ResourceIdentifierInput ;
}
