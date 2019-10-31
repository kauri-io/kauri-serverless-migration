/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: Link
// ====================================================

export interface Link_resourceIdentifier {
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

export interface Link_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "CommentDTO" | "ExternalLinkDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface Link_owner_PublicUserDTO_resourceIdentifier {
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

export interface Link_owner_PublicUserDTO {
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
  resourceIdentifier: Link_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface Link_owner_CommunityDTO_resourceIdentifier {
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

export interface Link_owner_CommunityDTO {
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
  resourceIdentifier: Link_owner_CommunityDTO_resourceIdentifier | null;
}

export type Link_owner = Link_owner_ArticleDTO | Link_owner_PublicUserDTO | Link_owner_CommunityDTO;

export interface Link_url {
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

export interface Link_title {
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

export interface Link_description {
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

export interface Link_summary {
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

export interface Link_authorName {
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

export interface Link {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: Link_resourceIdentifier | null;
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
  owner: Link_owner | null;
  /**
   * The link url
   */
  url: Link_url;
  /**
   * The link title
   */
  title: Link_title;
  /**
   * The description of the link, obtained via metadata
   */
  description: Link_description | null;
  /**
   * The user input summary of the link
   */
  summary: Link_summary | null;
  /**
   * Link attributes
   */
  attributes: any | null;
  /**
   * The link content author
   */
  authorName: Link_authorName;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
}
