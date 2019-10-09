/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchResultsAutocomplete
// ====================================================

export interface searchResultsAutocomplete_searchAutocomplete_content_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityInvitationDTO {
  __typename: "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO {
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
   * User title
   */
  userTitle: string | null;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_author {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner = searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments_content_author {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
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
   * Description of the article - First 500 characters of the plaintext content)
   */
  description: string | null;
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
  voteResult: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_comments;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner = searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources_ArticleDTO {
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

export type searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources = searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections {
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
  resourcesId: (searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections_resources | null)[];
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO {
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
  owner: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner | null;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Sections of the collections
   */
  sections: (searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_sections | null)[] | null;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO_members {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO_approvedId {
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

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO {
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
   * Community Name
   */
  name: string;
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
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * Community members list (full profile)
   */
  members: (searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO_members | null)[];
  /**
   * List of approved curated content
   */
  approvedId: (searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO_approvedId | null)[] | null;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource = searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityInvitationDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resourceIdentifier | null;
  /**
   * load the resource associated to this search match
   */
  resource: searchResultsAutocomplete_searchAutocomplete_content_resource;
}

export interface searchResultsAutocomplete_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements per type.
   */
  totalElementsBreakdown: any | null;
  /**
   * Returns the page content.
   */
  content: (searchResultsAutocomplete_searchAutocomplete_content | null)[];
}

export interface searchResultsAutocomplete {
  /**
   * Perform a parametrized global search query with autocomplete, pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchAutocomplete: searchResultsAutocomplete_searchAutocomplete;
}

export interface searchResultsAutocompleteVariables {
  page?: number | null;
  size?: number | null;
  query?: string | null;
  filter?: SearchFilterInput | null;
}
