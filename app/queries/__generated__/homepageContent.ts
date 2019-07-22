/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: homepageContent
// ====================================================

export interface homepageContent_getLatestHomepageDescriptor_rows_main_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Categories_content {
  __typename: "StaticContentElementDTO";
  propertyName: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Categories {
  __typename: "Categories";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Categories_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured {
  __typename: "Featured";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Actions_content {
  __typename: "StaticContentElementDTO";
  actionName: string | null;
  link: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Actions {
  __typename: "Actions";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Actions_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopTags_content {
  __typename: "StaticContentElementDTO";
  tagName: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopTags {
  __typename: "TopTags";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_TopTags_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content_user {
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
   * User avatar URI
   */
  avatar: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content_user | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors {
  __typename: "TopContributors";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo {
  __typename: "Promo";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent {
  __typename: "LatestContent";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Newsletter {
  __typename: "Newsletter";
  type: string | null;
  properties: any | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Import {
  __typename: "Import";
  type: string | null;
  properties: any | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main = homepageContent_getLatestHomepageDescriptor_rows_main_AbstractComponent | homepageContent_getLatestHomepageDescriptor_rows_main_Categories | homepageContent_getLatestHomepageDescriptor_rows_main_Featured | homepageContent_getLatestHomepageDescriptor_rows_main_Actions | homepageContent_getLatestHomepageDescriptor_rows_main_TopTags | homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors | homepageContent_getLatestHomepageDescriptor_rows_main_Promo | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent | homepageContent_getLatestHomepageDescriptor_rows_main_Newsletter | homepageContent_getLatestHomepageDescriptor_rows_main_Import;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories_content {
  __typename: "StaticContentElementDTO";
  propertyName: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories {
  __typename: "Categories";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured {
  __typename: "Featured";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions_content {
  __typename: "StaticContentElementDTO";
  actionName: string | null;
  link: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions {
  __typename: "Actions";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags_content {
  __typename: "StaticContentElementDTO";
  tagName: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags {
  __typename: "TopTags";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user {
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
   * User avatar URI
   */
  avatar: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors {
  __typename: "TopContributors";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo {
  __typename: "Promo";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
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

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections {
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
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO {
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
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "CollectionDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier | null;
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
   * Get vote result for the article
   */
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO {
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

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO {
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
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator | null;
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
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved | null)[] | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent {
  __typename: "LatestContent";
  type: string | null;
  properties: any | null;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Newsletter {
  __typename: "Newsletter";
  type: string | null;
  properties: any | null;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Import {
  __typename: "Import";
  type: string | null;
  properties: any | null;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar = homepageContent_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions | homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags | homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Newsletter | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Import;

export interface homepageContent_getLatestHomepageDescriptor_rows {
  __typename: "HomepageRowDTO";
  main: (homepageContent_getLatestHomepageDescriptor_rows_main | null)[] | null;
  sidebar: (homepageContent_getLatestHomepageDescriptor_rows_sidebar | null)[] | null;
}

export interface homepageContent_getLatestHomepageDescriptor {
  __typename: "HomepageDescriptorDTO";
  rows: (homepageContent_getLatestHomepageDescriptor_rows | null)[] | null;
}

export interface homepageContent {
  /**
   * Get the Homepage schema descriptor with the ability to fetch and populate the homepage schema
   * This operation can be performed anonymously
   */
  getLatestHomepageDescriptor: homepageContent_getLatestHomepageDescriptor | null;
}

export interface homepageContentVariables {
  populate?: boolean | null;
}
