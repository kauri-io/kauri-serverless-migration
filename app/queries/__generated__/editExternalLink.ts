/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: editExternalLink
// ====================================================

export interface editExternalLink_editExternalLink {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editExternalLink {
  /**
   * Edit an existing external link
   * This operation can only be performed by a logged in user
   */
  editExternalLink: editExternalLink_editExternalLink;
}

export interface editExternalLinkVariables {
  id: string;
  url: string;
  title: string;
  description?: string | null;
  summary?: string | null;
  attributes?: any | null;
  authorName?: string | null;
  authorSocial?: any | null;
  ownerId?: ResourceIdentifierInput | null;
  tags?: (string | null)[] | null;
}
