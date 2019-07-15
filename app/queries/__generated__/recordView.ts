/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: recordView
// ====================================================

export interface recordView_recordView {
  __typename: "MutationResponse";
  hash: string ;
}

export interface recordView {
  recordView: recordView_recordView ;
}

export interface recordViewVariables {
  resourceId?: ResourceIdentifierInput ;
}
