/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput, SearchFilterInput, ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: relatedArticles
// ====================================================

export interface relatedArticles_searchMoreLikeThis_content_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner = relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_ArticleDTO | relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_PublicUserDTO | relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner_CommunityDTO;

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_resourceIdentifier | null;
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
   * Checkpoint file (null if the article is not escalated on-chain)
   */
  checkpoint: string | null;
  /**
   * Set of optional attributes fields
   */
  attributes: any | null;
  /**
   * load the article owner (user or community resource type)
   */
  owner: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner = relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_ArticleDTO | relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_PublicUserDTO | relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner_CommunityDTO;

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_sections_resourcesId {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Collection ID
   */
  id: string;
  /**
   * Collection name
   */
  collecionName: string;
  /**
   * Collection description
   */
  description: string | null;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Last date updated
   */
  dateUpdated: any;
  /**
   *  Background image
   */
  background: string | null;
  /**
   * load the collection owner (user or community resource type)
   */
  owner: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_sections | null)[] | null;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO_members {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO_resourceIdentifier | null;
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
  members: (relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO_members | null)[];
}

export type relatedArticles_searchMoreLikeThis_content_resource = relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO | relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO | relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO | relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO;

export interface relatedArticles_searchMoreLikeThis_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resourceIdentifier | null;
  /**
   * load the resource associated to this search match
   */
  resource: relatedArticles_searchMoreLikeThis_content_resource;
}

export interface relatedArticles_searchMoreLikeThis {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Total amount of elements per type.
   */
  totalElementsBreakdown: any | null;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Returns the page content.
   */
  content: (relatedArticles_searchMoreLikeThis_content | null)[];
}

export interface relatedArticles {
  /**
   * Perform a parametrized global search query to find related resources with pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchMoreLikeThis: relatedArticles_searchMoreLikeThis;
}

export interface relatedArticlesVariables {
  page?: number | null;
  size?: number | null;
  resourceId: ResourceIdentifierInput;
  filter?: SearchFilterInput | null;
}
