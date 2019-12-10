/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityFilterInput, DirectionInput, ResourceTypeInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCommunities
// ====================================================

export interface searchCommunities_searchCommunities_content_resourceIdentifier {
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

export interface searchCommunities_searchCommunities_content_members {
  __typename: "CommunityMemberDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User full name
   */
  name: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  role: CommunityPermissionInput | null;
  /**
   * User status
   */
  status: UserStatusInput | null;
}

export interface searchCommunities_searchCommunities_content {
  __typename: "CommunityDTO";
  resourceIdentifier: searchCommunities_searchCommunities_content_resourceIdentifier | null;
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
   * Community Name
   */
  communityName: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * Community members list (full profile)
   */
  members: (searchCommunities_searchCommunities_content_members | null)[];
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
