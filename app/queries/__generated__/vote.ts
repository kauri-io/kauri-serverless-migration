/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: vote
// ====================================================

export interface vote_vote {
  __typename: "MutationResponse";
  hash: string ;
}

export interface vote {
  vote: vote_vote ;
}

export interface voteVariables {
  resourceId?: ResourceIdentifierInput ;
  value?: number ;
}
