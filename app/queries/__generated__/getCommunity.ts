/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityStatusInput, ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunity
// ====================================================

export interface getCommunity_getCommunity_creator {
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
  name: string | null;
}

export interface getCommunity_getCommunity_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resourcesId {
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

export interface getCommunity_getCommunity_homepage_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_author {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_homepage_resources_ArticleDTO_owner = getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier | null;
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
   * Description of the article - First 500 characters of the plaintext content)
   */
  description: string | null;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Date publication
   */
  datePublished: any | null;
  /**
   * Article author (full profile)
   */
  author: getCommunity_getCommunity_homepage_resources_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner | null;
  /**
   * Status of the article
   */
  status: ArticleStatusInput;
  /**
   * Set of optional attributes fields
   */
  attributes: any | null;
  /**
   * Get vote result for the article
   */
  voteResult: getCommunity_getCommunity_homepage_resources_ArticleDTO_voteResult | null;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_homepage_resources_CollectionDTO_owner = getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId {
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

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_sections {
  __typename: "SectionDTO";
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
  resourcesId: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO {
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
   *  Background image
   */
  background: string | null;
  /**
   * Last date updated
   */
  dateUpdated: any;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier | null;
  /**
   * load the collection owner (user or community resource type)
   */
  owner: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections | null)[] | null;
}

export interface getCommunity_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_homepage_resources = getCommunity_getCommunity_homepage_resources_PublicUserDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO | getCommunity_getCommunity_homepage_resources_CommunityDTO;

export interface getCommunity_getCommunity_homepage {
  __typename: "SectionDTO";
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
  resourcesId: (getCommunity_getCommunity_homepage_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (getCommunity_getCommunity_homepage_resources | null)[] | null;
}

export interface getCommunity_getCommunity_members {
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

export interface getCommunity_getCommunity_approvedId {
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

export interface getCommunity_getCommunity_pendingId {
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

export interface getCommunity_getCommunity_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_ArticleDTO_contributors {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_approved_ArticleDTO_voteResult {
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

export interface getCommunity_getCommunity_approved_ArticleDTO_author {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_approved_ArticleDTO_owner = getCommunity_getCommunity_approved_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_approved_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_approved_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunity_getCommunity_approved_ArticleDTO_comments_content_author | null;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunity_getCommunity_approved_ArticleDTO_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunity_getCommunity_approved_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (getCommunity_getCommunity_approved_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (getCommunity_getCommunity_approved_ArticleDTO_contributors | null)[] | null;
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
   * Status of the article
   */
  status: ArticleStatusInput;
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
   * Get vote result for the article
   */
  voteResult: getCommunity_getCommunity_approved_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: getCommunity_getCommunity_approved_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCommunity_getCommunity_approved_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: getCommunity_getCommunity_approved_ArticleDTO_comments | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_approved_CollectionDTO_owner = getCommunity_getCommunity_approved_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resourcesId {
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

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO {
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

export type getCommunity_getCommunity_approved_CollectionDTO_sections_resources = getCommunity_getCommunity_approved_CollectionDTO_sections_resources_PublicUserDTO | getCommunity_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunity_getCommunity_approved_CollectionDTO_sections {
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
  resourcesId: (getCommunity_getCommunity_approved_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (getCommunity_getCommunity_approved_CollectionDTO_sections_resources | null)[] | null;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_CollectionDTO {
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
  owner: getCommunity_getCommunity_approved_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_approved_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_approved = getCommunity_getCommunity_approved_PublicUserDTO | getCommunity_getCommunity_approved_ArticleDTO | getCommunity_getCommunity_approved_CollectionDTO;

export interface getCommunity_getCommunity_pending_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_ArticleDTO_contributors {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_pending_ArticleDTO_voteResult {
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

export interface getCommunity_getCommunity_pending_ArticleDTO_author {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_pending_ArticleDTO_owner = getCommunity_getCommunity_pending_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_pending_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
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
}

export interface getCommunity_getCommunity_pending_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunity_getCommunity_pending_ArticleDTO_comments_content_author | null;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunity_getCommunity_pending_ArticleDTO_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunity_getCommunity_pending_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (getCommunity_getCommunity_pending_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (getCommunity_getCommunity_pending_ArticleDTO_contributors | null)[] | null;
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
   * Status of the article
   */
  status: ArticleStatusInput;
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
   * Get vote result for the article
   */
  voteResult: getCommunity_getCommunity_pending_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: getCommunity_getCommunity_pending_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCommunity_getCommunity_pending_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: getCommunity_getCommunity_pending_ArticleDTO_comments | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_pending_CollectionDTO_owner = getCommunity_getCommunity_pending_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resourcesId {
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

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO {
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

export type getCommunity_getCommunity_pending_CollectionDTO_sections_resources = getCommunity_getCommunity_pending_CollectionDTO_sections_resources_PublicUserDTO | getCommunity_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunity_getCommunity_pending_CollectionDTO_sections {
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
  resourcesId: (getCommunity_getCommunity_pending_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (getCommunity_getCommunity_pending_CollectionDTO_sections_resources | null)[] | null;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_CollectionDTO {
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
  owner: getCommunity_getCommunity_pending_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_pending_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_resourceIdentifier | null;
}

export type getCommunity_getCommunity_pending = getCommunity_getCommunity_pending_PublicUserDTO | getCommunity_getCommunity_pending_ArticleDTO | getCommunity_getCommunity_pending_CollectionDTO;

export interface getCommunity_getCommunity {
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
  creator: getCommunity_getCommunity_creator | null;
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
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  resourceIdentifier: getCommunity_getCommunity_resourceIdentifier | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * Community Homepage (similar to a CollectionDTO)
   */
  homepage: (getCommunity_getCommunity_homepage | null)[] | null;
  /**
   * Community members list (full profile)
   */
  members: (getCommunity_getCommunity_members | null)[] | null;
  /**
   * List of approved curated content
   */
  approvedId: (getCommunity_getCommunity_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (getCommunity_getCommunity_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (getCommunity_getCommunity_approved | null)[] | null;
  /**
   * load the pending curated resources associated to this community
   */
  pending: (getCommunity_getCommunity_pending | null)[] | null;
}

export interface getCommunity {
  /**
   * Get a community by ID.
   * This operation can be performed anonymously
   */
  getCommunity: getCommunity_getCommunity | null;
}

export interface getCommunityVariables {
  id: string;
}
