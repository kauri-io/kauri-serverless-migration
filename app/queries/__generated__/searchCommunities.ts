/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityFilterInput, DirectionInput, CommunityPermissionInput, ResourceTypeInput, CommunityStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCommunities
// ====================================================

export interface searchCommunities_searchCommunities_content_members_content {
  __typename: "CommunityMemberDTO";
  id: string | null;
  role: CommunityPermissionInput | null;
}

export interface searchCommunities_searchCommunities_content_members {
  __typename: "ResponsePage_CommunityMemberDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (searchCommunities_searchCommunities_content_members_content | null)[];
}

export interface searchCommunities_searchCommunities_content_approvedId {
  __typename: "ResourceIdentifier";
  /**
   * Resource type
   */
  type: ResourceTypeInput;
}

export interface searchCommunities_searchCommunities_content {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community date created
   */
  dateCreated: any;
  /**
   * Community last date updated
   */
  dateUpdated: any;
  /**
   * Get community members list with filter, sorting and pagination.
   */
  members: searchCommunities_searchCommunities_content_members;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * List of approved curated content
   */
  approvedId: (searchCommunities_searchCommunities_content_approvedId | null)[] | null;
  /**
   * Community ID
   */
  creatorId: string;
  /**
   * Community Name
   */
  name: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community status
   */
  status: CommunityStatusInput;
  /**
   * Community Website
   */
  website: string | null;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  /**
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
}

export interface searchCommunities_searchCommunities {
  __typename: "ResponsePage_CommunityDTO";
  /**
   * Returns the page content.
   */
  content: (searchCommunities_searchCommunities_content | null)[];
  /**
   * Returns true if this is the last page.
   */
  isLast: boolean;
}

export interface searchCommunities {
  /**
   * Search communities with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchCommunities: searchCommunities_searchCommunities;
}

export interface searchCommunitiesVariables {
  size?: number | null;
  page?: number | null;
  filter?: CommunityFilterInput | null;
  sort?: string | null;
  dir?: DirectionInput | null;
}
