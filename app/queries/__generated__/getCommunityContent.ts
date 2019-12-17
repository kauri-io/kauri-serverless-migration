/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityResourceFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityContent
// ====================================================

export interface getCommunityContent_getCommunityContent_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_communities_community {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_communities_community;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors {
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
  /**
   * User title
   */
  title: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Returns a page of ArticleDTO authored by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  articles: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors_communities | null)[];
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_voteResult {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner = getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content | null)[];
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_contributors | null)[];
  /**
   * Check if the article was already read by the current user
   */
  isRead: boolean;
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
  voteResult: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors {
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
  /**
   * User title
   */
  title: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Returns a page of ArticleDTO authored by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  articles: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities | null)[];
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content | null)[];
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors | null)[];
  /**
   * Check if the article was already read by the current user
   */
  isRead: boolean;
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
  voteResult: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter {
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
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content | null)[];
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier | null;
  /**
   * The date that this external link was created
   */
  dateCreated: any;
  /**
   * The date that this external link was updated
   */
  dateUpdated: any;
  /**
   * The external link submitter user id
   */
  submitterId: string;
  /**
   * Check if the external link is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
  /**
   * Get vote result for the external link
   */
  voteResult: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections {
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
  resourcesId: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources | null)[];
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO {
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
   * Date created
   */
  dateCreated: any;
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
  owner: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner = getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter {
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
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_url {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_linkTitle {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_linkDescription {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_summary {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_authorName {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
  /**
   * If the field is editable
   */
  isEditable: boolean | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments_content_author {
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments_content | null)[];
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_voteResult {
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

export interface getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_resourceIdentifier | null;
  /**
   * The date that this external link was created
   */
  dateCreated: any;
  /**
   * The date that this external link was updated
   */
  dateUpdated: any;
  /**
   * The external link submitter user id
   */
  submitterId: string;
  /**
   * Check if the external link is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_comments;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
  /**
   * Get vote result for the external link
   */
  voteResult: getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO_voteResult;
}

export type getCommunityContent_getCommunityContent_content_resource = getCommunityContent_getCommunityContent_content_resource_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO | getCommunityContent_getCommunityContent_content_resource_ExternalLinkDTO;

export interface getCommunityContent_getCommunityContent_content {
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
   * load the resource
   */
  resource: getCommunityContent_getCommunityContent_content_resource;
}

export interface getCommunityContent_getCommunityContent {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Returns the page content.
   */
  content: (getCommunityContent_getCommunityContent_content | null)[];
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

export interface getCommunityContent {
  /**
   * Get community curated content list with filter, sorting and pagination.
   * This operation can be performed anonymously.
   */
  getCommunityContent: getCommunityContent_getCommunityContent;
}

export interface getCommunityContentVariables {
  id: string;
  page?: number | null;
  size?: number | null;
  filter?: CommunityResourceFilterInput | null;
}
