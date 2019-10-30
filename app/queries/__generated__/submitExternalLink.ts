/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: submitExternalLink
// ====================================================

export interface submitExternalLink_submitExternalLink {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface submitExternalLink {
  /**
   * Submit a new external link
   * This operation can only be performed by a logged in user
   */
  submitExternalLink: submitExternalLink_submitExternalLink;
}

export interface submitExternalLinkVariables {
  url: string;
  title: string;
  description?: string | null;
  summary?: string | null;
  attributes?: any | null;
  authorName?: string | null;
  authorSocial?: any | null;
  owner?: ResourceIdentifierInput | null;
  tags?: (string | null)[] | null;
}
