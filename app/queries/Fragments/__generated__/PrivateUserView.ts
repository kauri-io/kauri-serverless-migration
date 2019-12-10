/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserStatusInput, CommunityPermissionInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: PrivateUserView
// ====================================================

export interface PrivateUserView_communities_community_members {
  __typename: "CommunityMemberDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  role: CommunityPermissionInput | null;
}

export interface PrivateUserView_communities_community {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
  /**
   * Community members list (full profile)
   */
  members: (PrivateUserView_communities_community_members | null)[];
}

export interface PrivateUserView_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Role of the user within the community
   */
  role: CommunityPermissionInput;
  /**
   * Community
   */
  community: PrivateUserView_communities_community;
}

export interface PrivateUserView_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface PrivateUserView_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface PrivateUserView {
  __typename: "UserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User email address
   */
  email: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  name: string | null;
  /**
   * User title
   */
  title: string | null;
  /**
   * User website
   */
  website: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * User status
   */
  status: UserStatusInput | null;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (PrivateUserView_communities | null)[];
  /**
   * Retrieve user subsriptions (subscription name : status true/false)
   */
  subscriptions: any | null;
  /**
   * User creation date
   */
  dateCreated: any | null;
  /**
   * Returns a page of ArticleDTO authored by this UserDTO.
   * This operation can only be performed by logged user
   */
  articles: PrivateUserView_articles;
  /**
   * Returns a page of CollectionDTO owned by this UserDTO.
   * This operation can only be performed by logged user
   */
  collections: PrivateUserView_collections;
}
