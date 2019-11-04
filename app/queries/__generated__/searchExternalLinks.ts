/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, ExternalLinkFilterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchExternalLinks
// ====================================================

export interface searchExternalLinks_searchExternalLinks_content_resourceIdentifier {
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

export interface searchExternalLinks_searchExternalLinks_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchExternalLinks_searchExternalLinks_content_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchExternalLinks_searchExternalLinks_content_owner_PublicUserDTO {
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
  resourceIdentifier: searchExternalLinks_searchExternalLinks_content_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchExternalLinks_searchExternalLinks_content_owner_CommunityDTO_resourceIdentifier {
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

export interface searchExternalLinks_searchExternalLinks_content_owner_CommunityDTO {
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
  resourceIdentifier: searchExternalLinks_searchExternalLinks_content_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchExternalLinks_searchExternalLinks_content_owner = searchExternalLinks_searchExternalLinks_content_owner_ArticleDTO | searchExternalLinks_searchExternalLinks_content_owner_PublicUserDTO | searchExternalLinks_searchExternalLinks_content_owner_CommunityDTO;

export interface searchExternalLinks_searchExternalLinks_content_url {
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

export interface searchExternalLinks_searchExternalLinks_content_linkTitle {
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

export interface searchExternalLinks_searchExternalLinks_content_linkDescription {
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

export interface searchExternalLinks_searchExternalLinks_content_summary {
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

export interface searchExternalLinks_searchExternalLinks_content_authorName {
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

export interface searchExternalLinks_searchExternalLinks_content_comments_content_author {
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

export interface searchExternalLinks_searchExternalLinks_content_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: searchExternalLinks_searchExternalLinks_content_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface searchExternalLinks_searchExternalLinks_content_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (searchExternalLinks_searchExternalLinks_content_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchExternalLinks_searchExternalLinks_content {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: searchExternalLinks_searchExternalLinks_content_resourceIdentifier | null;
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
   * load the external link owner (user or community resource type)
   */
  owner: searchExternalLinks_searchExternalLinks_content_owner | null;
  /**
   * The link url
   */
  url: searchExternalLinks_searchExternalLinks_content_url;
  /**
   * The link title
   */
  linkTitle: searchExternalLinks_searchExternalLinks_content_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: searchExternalLinks_searchExternalLinks_content_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: searchExternalLinks_searchExternalLinks_content_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: searchExternalLinks_searchExternalLinks_content_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: searchExternalLinks_searchExternalLinks_content_comments;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
}

export interface searchExternalLinks_searchExternalLinks {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Returns the page content.
   */
  content: (searchExternalLinks_searchExternalLinks_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchExternalLinks {
  /**
   * Search external links with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchExternalLinks: searchExternalLinks_searchExternalLinks;
}

export interface searchExternalLinksVariables {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
  filter?: ExternalLinkFilterInput | null;
}