/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, CommunityStatusInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunity
// ====================================================

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

export interface getCommunity_getCommunity_creator_resourceIdentifier {
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

export interface getCommunity_getCommunity_creator {
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
  resourceIdentifier: getCommunity_getCommunity_creator_resourceIdentifier | null;
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
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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
  owner: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_submitter {
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
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_url {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_linkTitle {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_linkDescription {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_summary {
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

export interface getCommunity_getCommunity_homepage_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunity_getCommunity_homepage_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
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
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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
   * List of resource identifiers
   */
  resourcesId: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier | null;
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
  owner: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections | null)[] | null;
}

export type getCommunity_getCommunity_homepage_resources = getCommunity_getCommunity_homepage_resources_PublicUserDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO | getCommunity_getCommunity_homepage_resources_ExternalLinkDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO;

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
  resources: (getCommunity_getCommunity_homepage_resources | null)[];
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
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_approved_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_resourceIdentifier | null;
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
  owner: getCommunity_getCommunity_approved_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_submitter {
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
  resourceIdentifier: getCommunity_getCommunity_approved_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_url {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_linkTitle {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_linkDescription {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO_summary {
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

export interface getCommunity_getCommunity_approved_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: getCommunity_getCommunity_approved_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: getCommunity_getCommunity_approved_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunity_getCommunity_approved_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunity_getCommunity_approved_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunity_getCommunity_approved_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunity_getCommunity_approved_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
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

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_approved_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (getCommunity_getCommunity_approved_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunity_getCommunity_approved_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_resourceIdentifier | null;
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
  owner: getCommunity_getCommunity_approved_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_approved_CollectionDTO_sections | null)[] | null;
}

export type getCommunity_getCommunity_approved = getCommunity_getCommunity_approved_PublicUserDTO | getCommunity_getCommunity_approved_ArticleDTO | getCommunity_getCommunity_approved_ExternalLinkDTO | getCommunity_getCommunity_approved_CollectionDTO;

export interface getCommunity_getCommunity_pending_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_pending_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_resourceIdentifier | null;
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
  owner: getCommunity_getCommunity_pending_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_submitter {
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
  resourceIdentifier: getCommunity_getCommunity_pending_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_url {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_linkTitle {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_linkDescription {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO_summary {
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

export interface getCommunity_getCommunity_pending_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: getCommunity_getCommunity_pending_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: getCommunity_getCommunity_pending_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCommunity_getCommunity_pending_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCommunity_getCommunity_pending_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCommunity_getCommunity_pending_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCommunity_getCommunity_pending_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
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

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
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

export interface getCommunity_getCommunity_pending_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (getCommunity_getCommunity_pending_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface getCommunity_getCommunity_pending_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_resourceIdentifier | null;
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
  owner: getCommunity_getCommunity_pending_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (getCommunity_getCommunity_pending_CollectionDTO_sections | null)[] | null;
}

export type getCommunity_getCommunity_pending = getCommunity_getCommunity_pending_PublicUserDTO | getCommunity_getCommunity_pending_ArticleDTO | getCommunity_getCommunity_pending_ExternalLinkDTO | getCommunity_getCommunity_pending_CollectionDTO;

export interface getCommunity_getCommunity {
  __typename: "CommunityDTO";
  resourceIdentifier: getCommunity_getCommunity_resourceIdentifier | null;
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
  creator: getCommunity_getCommunity_creator;
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
  members: (getCommunity_getCommunity_members | null)[];
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
  approved: (getCommunity_getCommunity_approved | null)[];
  /**
   * load the pending curated resources associated to this community
   */
  pending: (getCommunity_getCommunity_pending | null)[];
}

export interface getCommunity {
  /**
   * Get a community by ID.
   * This operation can be performed anonymously
   */
  getCommunity: getCommunity_getCommunity;
}

export interface getCommunityVariables {
  id: string;
}
