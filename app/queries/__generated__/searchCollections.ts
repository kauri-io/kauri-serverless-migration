/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CollectionFilterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCollections
// ====================================================

export interface searchCollections_searchCollections_content_resourceIdentifier {
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

export interface searchCollections_searchCollections_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchCollections_searchCollections_content_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchCollections_searchCollections_content_owner_PublicUserDTO {
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
  resourceIdentifier: searchCollections_searchCollections_content_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchCollections_searchCollections_content_owner_CommunityDTO_resourceIdentifier {
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

export interface searchCollections_searchCollections_content_owner_CommunityDTO {
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
  resourceIdentifier: searchCollections_searchCollections_content_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchCollections_searchCollections_content_owner = searchCollections_searchCollections_content_owner_ArticleDTO | searchCollections_searchCollections_content_owner_PublicUserDTO | searchCollections_searchCollections_content_owner_CommunityDTO;

export interface searchCollections_searchCollections_content_sections_resourcesId {
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

export interface searchCollections_searchCollections_content_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (searchCollections_searchCollections_content_sections_resourcesId | null)[] | null;
}

export interface searchCollections_searchCollections_content {
  __typename: "CollectionDTO";
  resourceIdentifier: searchCollections_searchCollections_content_resourceIdentifier | null;
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
  owner: searchCollections_searchCollections_content_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (searchCollections_searchCollections_content_sections | null)[] | null;
}

export interface searchCollections_searchCollections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Returns the page content.
   */
  content: (searchCollections_searchCollections_content | null)[];
}

export interface searchCollections {
  /**
   * Search collections with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchCollections: searchCollections_searchCollections;
}

export interface searchCollectionsVariables {
  filter?: CollectionFilterInput | null;
}
