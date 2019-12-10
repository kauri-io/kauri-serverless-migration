/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityResourceFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityContent
// ====================================================

export interface getCommunityContent_getCommunityContent_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier | null;
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
  owner: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
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

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier | null;
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
  owner: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections | null)[] | null;
}

export type getCommunityContent_getCommunityContent_content_resource = getCommunityContent_getCommunityContent_content_resource_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO;

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
