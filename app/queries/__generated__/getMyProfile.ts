/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserStatusInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_getMyProfile_communities_community_members {
  __typename: "CommunityMemberDTO";
  id: string ;
  role: CommunityPermissionInput ;
}

export interface getMyProfile_getMyProfile_communities_community {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  members: (getMyProfile_getMyProfile_communities_community_members )[] ;
}

export interface getMyProfile_getMyProfile_communities {
  __typename: "MemberRoleCommunityDTO";
  role: CommunityPermissionInput ;
  community: getMyProfile_getMyProfile_communities_community ;
}

export interface getMyProfile_getMyProfile {
  __typename: "UserDTO";
  id: string ;
  email: string ;
  username: string ;
  name: string ;
  title: string ;
  website: string ;
  avatar: string ;
  social: any ;
  status: UserStatusInput ;
  communities: (getMyProfile_getMyProfile_communities )[] ;
  subscriptions: any ;
  dateCreated: any ;
}

export interface getMyProfile {
  getMyProfile: getMyProfile_getMyProfile ;
}
