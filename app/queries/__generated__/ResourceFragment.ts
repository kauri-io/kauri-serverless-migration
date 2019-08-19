/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: ResourceFragment
// ====================================================

export interface ResourceFragment_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface ResourceFragment_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: ResourceFragment_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface ResourceFragment_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface ResourceFragment_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  resourceIdentifier: ResourceFragment_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type ResourceFragment_CollectionDTO_owner = ResourceFragment_CollectionDTO_owner_ArticleDTO | ResourceFragment_CollectionDTO_owner_PublicUserDTO | ResourceFragment_CollectionDTO_owner_CommunityDTO;

export interface ResourceFragment_CollectionDTO_sections_resourcesId {
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

export interface ResourceFragment_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
}

export type ResourceFragment_CollectionDTO_sections_resources = ResourceFragment_CollectionDTO_sections_resources_PublicUserDTO | ResourceFragment_CollectionDTO_sections_resources_ArticleDTO;

export interface ResourceFragment_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * Section ID
   */
  id: string | null;
  /**
   * Section name
   */
  name: string | null;
  /**
   * Section descriptions
   */
  description: string | null;
  /**
   * List of resource identifiers
   */
  resourcesId: (ResourceFragment_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (ResourceFragment_CollectionDTO_sections_resources | null)[];
}

export interface ResourceFragment_CollectionDTO_resourceIdentifier {
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

export interface ResourceFragment_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
  /**
   * Collection name
   */
  name: string;
  /**
   * Collection description
   */
  description: string | null;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   *  Background image
   */
  background: string | null;
  /**
   * Last date updated
   */
  dateUpdated: any;
  /**
   * load the collection owner (user or community resource type)
   */
  owner: ResourceFragment_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (ResourceFragment_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: ResourceFragment_CollectionDTO_resourceIdentifier | null;
}

export interface ResourceFragment_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource version (article)
   */
  version: number | null;
}

export interface ResourceFragment_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface ResourceFragment_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
  /**
   * Vote count: Number of votes
   */
  count: any;
  /**
   * Returns true if a logged user has already voted
   */
  hasVoted: boolean | null;
  /**
   * Count per vote
   */
  quantity: any;
}

export interface ResourceFragment_ArticleDTO_author {
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
}

export interface ResourceFragment_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface ResourceFragment_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface ResourceFragment_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: ResourceFragment_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface ResourceFragment_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface ResourceFragment_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  resourceIdentifier: ResourceFragment_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type ResourceFragment_ArticleDTO_owner = ResourceFragment_ArticleDTO_owner_ArticleDTO | ResourceFragment_ArticleDTO_owner_PublicUserDTO | ResourceFragment_ArticleDTO_owner_CommunityDTO;

export interface ResourceFragment_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: ResourceFragment_ArticleDTO_resourceIdentifier | null;
  /**
   * Description of the article - First 500 characters of the plaintext content)
   */
  description: string | null;
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
  /**
   * Title of article
   */
  title: string;
  /**
   * Content of the article (most likely to be plain markdown text)
   */
  content: string;
  /**
   * Author of the article (USER only)
   */
  authorId: string;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Date publication
   */
  datePublished: any | null;
  /**
   * Set of optional attributes fields
   */
  attributes: any | null;
  /**
   * IPFS Content hash
   */
  contentHash: string;
  /**
   * Checkpoint file (null if the article is not escalated on-chain)
   */
  checkpoint: string | null;
  /**
   * Tags list
   */
  tags: (string | null)[] | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: ResourceFragment_ArticleDTO_comments;
  /**
   * Get vote result for the article
   */
  voteResult: ResourceFragment_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: ResourceFragment_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: ResourceFragment_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface ResourceFragment_CommunityDTO_creator {
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
}

export interface ResourceFragment_CommunityDTO_members {
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

export interface ResourceFragment_CommunityDTO_approvedId {
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

export interface ResourceFragment_CommunityDTO_pendingId {
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

export interface ResourceFragment_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
}

export interface ResourceFragment_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type ResourceFragment_CommunityDTO_approved = ResourceFragment_CommunityDTO_approved_PublicUserDTO | ResourceFragment_CommunityDTO_approved_ArticleDTO | ResourceFragment_CommunityDTO_approved_CollectionDTO;

export interface ResourceFragment_CommunityDTO {
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
   * Community ID
   */
  creatorId: string;
  /**
   * Community creator (full profile)
   */
  creator: ResourceFragment_CommunityDTO_creator;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community Website
   */
  website: string | null;
  /**
   * Community members list (full profile)
   */
  members: (ResourceFragment_CommunityDTO_members | null)[];
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * List of approved curated content
   */
  approvedId: (ResourceFragment_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (ResourceFragment_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (ResourceFragment_CommunityDTO_approved | null)[];
}

export type ResourceFragment = ResourceFragment_PublicUserDTO | ResourceFragment_CollectionDTO | ResourceFragment_ArticleDTO | ResourceFragment_CommunityDTO;
