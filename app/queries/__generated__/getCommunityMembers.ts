/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityMemberFilterInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityMembers
// ====================================================

export interface getCommunityMembers_getCommunityMembers_content_user_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityMembers_getCommunityMembers_content_user_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityMembers_getCommunityMembers_content_user_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityMembers_getCommunityMembers_content_user_communities_community {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
}

export interface getCommunityMembers_getCommunityMembers_content_user_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: getCommunityMembers_getCommunityMembers_content_user_communities_community;
}

export interface getCommunityMembers_getCommunityMembers_content_user {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  publicUserName: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * User title
   */
  userTitle: string | null;
  /**
   * Returns a page of ArticleDTO authored by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  articles: getCommunityMembers_getCommunityMembers_content_user_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getCommunityMembers_getCommunityMembers_content_user_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: getCommunityMembers_getCommunityMembers_content_user_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (getCommunityMembers_getCommunityMembers_content_user_communities | null)[];
}

export interface getCommunityMembers_getCommunityMembers_content {
  __typename: "CommunityMemberDTO";
  id: string | null;
  role: CommunityPermissionInput | null;
  /**
   * Community member (full profile)
   */
  user: getCommunityMembers_getCommunityMembers_content_user;
}

export interface getCommunityMembers_getCommunityMembers {
  __typename: "ResponsePage_CommunityMemberDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunityMembers_getCommunityMembers_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns true if this is the last page.
   */
  isLast: boolean;
}

export interface getCommunityMembers {
  /**
   * Get community invitations list with filter, sorting and pagination.
   * This operation can only be performed by a community ADMIN.
   */
  getCommunityMembers: getCommunityMembers_getCommunityMembers;
}

export interface getCommunityMembersVariables {
  id: string;
  page?: number | null;
  size?: number | null;
  filter?: CommunityMemberFilterInput | null;
}
