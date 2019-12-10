/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: HomepageComponentFragment
// ====================================================

export interface HomepageComponentFragment_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface HomepageComponentFragment_Categories_content {
  __typename: "StaticContentElementDTO";
  propertyName: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
}

export interface HomepageComponentFragment_Categories {
  __typename: "Categories";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Categories_content | null)[] | null;
}

export interface HomepageComponentFragment_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner = HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections | null)[] | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner = HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_members {
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

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CommunityDTO_resourceIdentifier | null;
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
  members: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_members | null)[];
}

export type HomepageComponentFragment_Featured_content_resource = HomepageComponentFragment_Featured_content_resource_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO | HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Featured_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: HomepageComponentFragment_Featured_content_resource;
}

export interface HomepageComponentFragment_Featured {
  __typename: "Featured";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Featured_content | null)[] | null;
}

export interface HomepageComponentFragment_Actions_content {
  __typename: "StaticContentElementDTO";
  actionName: string | null;
  link: string | null;
}

export interface HomepageComponentFragment_Actions {
  __typename: "Actions";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Actions_content | null)[] | null;
}

export interface HomepageComponentFragment_TopTags_content {
  __typename: "StaticContentElementDTO";
  tagName: string | null;
}

export interface HomepageComponentFragment_TopTags {
  __typename: "TopTags";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_TopTags_content | null)[] | null;
}

export interface HomepageComponentFragment_TopContributors_content_user_resourceIdentifier {
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

export interface HomepageComponentFragment_TopContributors_content_user {
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
  resourceIdentifier: HomepageComponentFragment_TopContributors_content_user_resourceIdentifier | null;
}

export interface HomepageComponentFragment_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: HomepageComponentFragment_TopContributors_content_user;
}

export interface HomepageComponentFragment_TopContributors {
  __typename: "TopContributors";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_TopContributors_content | null)[] | null;
}

export interface HomepageComponentFragment_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner = HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections | null)[] | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner = HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_members {
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

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CommunityDTO_resourceIdentifier | null;
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
  members: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_members | null)[];
}

export type HomepageComponentFragment_Promo_content_resource = HomepageComponentFragment_Promo_content_resource_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO | HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Promo_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: HomepageComponentFragment_Promo_content_resource;
}

export interface HomepageComponentFragment_Promo {
  __typename: "Promo";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Promo_content | null)[] | null;
}

export interface HomepageComponentFragment_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_owner = HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections | null)[] | null;
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_resourceIdentifier | null;
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
  submitter: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_ArticleDTO_owner = HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier | null;
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
  owner: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_members {
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

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO {
  __typename: "CommunityDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CommunityDTO_resourceIdentifier | null;
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
  members: (HomepageComponentFragment_LatestContent_content_CommunityDTO_members | null)[];
}

export type HomepageComponentFragment_LatestContent_content = HomepageComponentFragment_LatestContent_content_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO | HomepageComponentFragment_LatestContent_content_ExternalLinkDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO;

export interface HomepageComponentFragment_LatestContent {
  __typename: "LatestContent";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_LatestContent_content | null)[] | null;
}

export interface HomepageComponentFragment_Newsletter {
  __typename: "Newsletter";
  type: string | null;
  properties: any | null;
}

export interface HomepageComponentFragment_Import {
  __typename: "Import";
  type: string | null;
  properties: any | null;
}

export type HomepageComponentFragment = HomepageComponentFragment_AbstractComponent | HomepageComponentFragment_Categories | HomepageComponentFragment_Featured | HomepageComponentFragment_Actions | HomepageComponentFragment_TopTags | HomepageComponentFragment_TopContributors | HomepageComponentFragment_Promo | HomepageComponentFragment_LatestContent | HomepageComponentFragment_Newsletter | HomepageComponentFragment_Import;
