/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: vote
// ====================================================

export interface vote_vote {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface vote {
  /**
   * Record a vote (+1/-1) against a resource. One vote allowed per user and per resource
   * This operation can only be performed by a logged user.
   */
  vote: vote_vote | null;
}

export interface voteVariables {
  resourceId: ResourceIdentifierInput;
  value: number;
}
