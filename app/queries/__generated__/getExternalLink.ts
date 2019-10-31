/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getExternalLink
// ====================================================

export interface getExternalLink_getExternalLink_resourceIdentifier {
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

export interface getExternalLink_getExternalLink_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "ExternalLinkDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getExternalLink_getExternalLink_owner_PublicUserDTO_resourceIdentifier {
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

export interface getExternalLink_getExternalLink_owner_PublicUserDTO {
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
  resourceIdentifier: getExternalLink_getExternalLink_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getExternalLink_getExternalLink_owner_CommunityDTO_resourceIdentifier {
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

export interface getExternalLink_getExternalLink_owner_CommunityDTO {
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
  resourceIdentifier: getExternalLink_getExternalLink_owner_CommunityDTO_resourceIdentifier | null;
}

export type getExternalLink_getExternalLink_owner = getExternalLink_getExternalLink_owner_ArticleDTO | getExternalLink_getExternalLink_owner_PublicUserDTO | getExternalLink_getExternalLink_owner_CommunityDTO;

export interface getExternalLink_getExternalLink_url {
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

export interface getExternalLink_getExternalLink_linkTitle {
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

export interface getExternalLink_getExternalLink_linkDescription {
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

export interface getExternalLink_getExternalLink_summary {
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

export interface getExternalLink_getExternalLink_authorName {
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

export interface getExternalLink_getExternalLink {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: getExternalLink_getExternalLink_resourceIdentifier | null;
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
  owner: getExternalLink_getExternalLink_owner | null;
  /**
   * The link url
   */
  url: getExternalLink_getExternalLink_url;
  /**
   * The link title
   */
  linkTitle: getExternalLink_getExternalLink_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getExternalLink_getExternalLink_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getExternalLink_getExternalLink_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: getExternalLink_getExternalLink_authorName;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
}

export interface getExternalLink {
  /**
   * Get an external link by ID
   * This operation can be performed anonymously
   */
  getExternalLink: getExternalLink_getExternalLink;
}

export interface getExternalLinkVariables {
  id: string;
}
