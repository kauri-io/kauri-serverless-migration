/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, SearchParameterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocompleteArticles
// ====================================================

export interface searchAutocompleteArticles_searchAutocomplete_content_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner = searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO;

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_resourceIdentifier | null;
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
  owner: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_submitter {
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
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_url {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_linkTitle {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_linkDescription {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_summary {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner = searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO;

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId {
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

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier | null;
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
  owner: searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO_sections | null)[] | null;
}

export type searchAutocompleteArticles_searchAutocomplete_content_resource = searchAutocompleteArticles_searchAutocomplete_content_resource_PublicUserDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ExternalLinkDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_CollectionDTO;

export interface searchAutocompleteArticles_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resourceIdentifier | null;
  /**
   * load the resource associated to this search match
   */
  resource: searchAutocompleteArticles_searchAutocomplete_content_resource;
}

export interface searchAutocompleteArticles_searchAutocomplete {
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
   * Returns true if this is the last page.
   */
  isLast: boolean;
  /**
   * Returns the page content.
   */
  content: (searchAutocompleteArticles_searchAutocomplete_content | null)[];
}

export interface searchAutocompleteArticles {
  /**
   * Perform a parametrized global search query with autocomplete, pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchAutocomplete: searchAutocompleteArticles_searchAutocomplete;
}

export interface searchAutocompleteArticlesVariables {
  page?: number | null;
  size?: number | null;
  query?: string | null;
  filter?: SearchFilterInput | null;
  parameter?: SearchParameterInput | null;
}
