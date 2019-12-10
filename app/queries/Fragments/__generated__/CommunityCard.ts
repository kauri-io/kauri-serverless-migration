/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, CommunityPermissionInput, UserStatusInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: CommunityCard
// ====================================================

export interface CommunityCard_resourceIdentifier {
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

export interface CommunityCard_members {
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

export interface CommunityCard {
  __typename: "CommunityDTO";
  resourceIdentifier: CommunityCard_resourceIdentifier | null;
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
  members: (CommunityCard_members | null)[];
}
