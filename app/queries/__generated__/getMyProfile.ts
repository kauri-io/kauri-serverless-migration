/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserStatusInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_getMyProfile_communities_community_members {
  __typename: "CommunityMemberDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  role: CommunityPermissionInput | null;
}

export interface getMyProfile_getMyProfile_communities_community {
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
  members: (getMyProfile_getMyProfile_communities_community_members | null)[] | null;
}

export interface getMyProfile_getMyProfile_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Role of the user within the community
   */
  role: CommunityPermissionInput;
  /**
   * Community
   */
  community: getMyProfile_getMyProfile_communities_community;
}

export interface getMyProfile_getMyProfile {
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
  communities: (getMyProfile_getMyProfile_communities | null)[] | null;
  /**
   * Retrieve user subsriptions (subscription name : status true/false)
   */
  subscriptions: any | null;
  /**
   * User creation date
   */
  dateCreated: any | null;
}

export interface getMyProfile {
  /**
   * Retrieve user profile (public and private information) corresponding to the token.
   * This operation can only be performed by a logged user.
   */
  getMyProfile: getMyProfile_getMyProfile | null;
}
