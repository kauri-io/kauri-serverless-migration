/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityFilterInput, DirectionInput, ResourceTypeInput, CommunityStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCommunities
// ====================================================

export interface searchCommunities_searchCommunities_content_members {
  __typename: "CommunityMemberDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User avatar URI
   */
  avatar: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  name: string | null;
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
   * Community members list (full profile)
   */
  members: (searchCommunities_searchCommunities_content_members | null)[] | null;
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
  searchCommunities: searchCommunities_searchCommunities | null;
}

export interface searchCommunitiesVariables {
  size?: number | null;
  page?: number | null;
  filter?: CommunityFilterInput | null;
  sort?: string | null;
  dir?: DirectionInput | null;
}
