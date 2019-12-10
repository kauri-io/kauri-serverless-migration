/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityResourceFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityArticleContent
// ====================================================

export interface getCommunityArticleContent_getCommunityContent_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner = getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO | getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO | getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO;

export interface getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier | null;
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
  owner: getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner = getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO | getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO | getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO;

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier | null;
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
  owner: getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO_sections | null)[] | null;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter {
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
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_url {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_linkTitle {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_linkDescription {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_summary {
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

export interface getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_resourceIdentifier | null;
  /**
   * External link ID
   */
  id: string;
  /**
   * The date that this external link was created
   */
  dateCreated: any;
  /**
   * The date that this external link was updated
   */
  dateUpdated: any;
  /**
   * Check if the external link is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * External link submitter (full profile)
   */
  submitter: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export type getCommunityArticleContent_getCommunityContent_content_resource = getCommunityArticleContent_getCommunityContent_content_resource_PublicUserDTO | getCommunityArticleContent_getCommunityContent_content_resource_ArticleDTO | getCommunityArticleContent_getCommunityContent_content_resource_CollectionDTO | getCommunityArticleContent_getCommunityContent_content_resource_ExternalLinkDTO;

export interface getCommunityArticleContent_getCommunityContent_content {
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
  resource: getCommunityArticleContent_getCommunityContent_content_resource;
}

export interface getCommunityArticleContent_getCommunityContent {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Returns the page content.
   */
  content: (getCommunityArticleContent_getCommunityContent_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCommunityArticleContent {
  /**
   * Get community curated content list with filter, sorting and pagination.
   * This operation can be performed anonymously.
   */
  getCommunityContent: getCommunityArticleContent_getCommunityContent;
}

export interface getCommunityArticleContentVariables {
  id: string;
  page?: number | null;
  size?: number | null;
  filter?: CommunityResourceFilterInput | null;
}
