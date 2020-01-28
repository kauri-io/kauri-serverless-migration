/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: stageTip
// ====================================================

export interface stageTip_stageTip {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface stageTip {
  stageTip: stageTip_stageTip | null;
}

export interface stageTipVariables {
  transactionHash?: string | null;
  recipientResourceId?: ResourceIdentifierInput | null;
  tipValue?: any | null;
  tokenType?: string | null;
}
