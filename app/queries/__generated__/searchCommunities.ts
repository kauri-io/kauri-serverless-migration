/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityFilterInput, DirectionInput, CommunityStatusInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCommunities
// ====================================================

export interface searchCommunities_searchCommunities_content_approvedId {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
}

export interface searchCommunities_searchCommunities_content {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  name: string ;
  description: string ;
  status: CommunityStatusInput ;
  website: string ;
  avatar: string ;
  tags: (string )[] ;
  social: any ;
  approvedId: (searchCommunities_searchCommunities_content_approvedId )[] ;
}

export interface searchCommunities_searchCommunities {
  __typename: "ResponsePage_CommunityDTO";
  content: (searchCommunities_searchCommunities_content )[] ;
  isLast: boolean;
}

export interface searchCommunities {
  searchCommunities: searchCommunities_searchCommunities ;
}

export interface searchCommunitiesVariables {
  size?: number ;
  page?: number ;
  filter?: CommunityFilterInput ;
  sort?: string ;
  dir?: DirectionInput ;
}
