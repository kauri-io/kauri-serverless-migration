/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, ExternalLinkFilterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchExternalLinks
// ====================================================

export interface searchExternalLinks_searchExternalLinks_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource ID
   */
  id: string;
}

export interface searchExternalLinks_searchExternalLinks_content_submitter_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource type
   */
  type: ResourceTypeInput;
}

export interface searchExternalLinks_searchExternalLinks_content_submitter {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User full name
   */
  publicUserName: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  resourceIdentifier: searchExternalLinks_searchExternalLinks_content_submitter_resourceIdentifier | null;
}

export interface searchExternalLinks_searchExternalLinks_content_url {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface searchExternalLinks_searchExternalLinks_content_linkTitle {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface searchExternalLinks_searchExternalLinks_content_linkDescription {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface searchExternalLinks_searchExternalLinks_content_summary {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface searchExternalLinks_searchExternalLinks_content {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: searchExternalLinks_searchExternalLinks_content_resourceIdentifier | null;
  /**
   * External link ID
   */
  id: string;
  /**
   * The date that this external link was created
   */
  dateCreated: any;
  /**
   * The date that this external link was updated
   */
  dateUpdated: any;
  /**
   * Check if the external link is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * External link submitter (full profile)
   */
  submitter: searchExternalLinks_searchExternalLinks_content_submitter;
  /**
   * The link url
   */
  url: searchExternalLinks_searchExternalLinks_content_url;
  /**
   * The link title
   */
  linkTitle: searchExternalLinks_searchExternalLinks_content_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: searchExternalLinks_searchExternalLinks_content_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: searchExternalLinks_searchExternalLinks_content_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export interface searchExternalLinks_searchExternalLinks {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Returns the page content.
   */
  content: (searchExternalLinks_searchExternalLinks_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchExternalLinks {
  /**
   * Search external links with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchExternalLinks: searchExternalLinks_searchExternalLinks;
}

export interface searchExternalLinksVariables {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
  filter?: ExternalLinkFilterInput | null;
}
