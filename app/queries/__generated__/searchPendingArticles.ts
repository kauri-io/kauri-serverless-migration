/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ArticleFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchPendingArticles
// ====================================================

export interface searchPendingArticles_searchArticles_content_resourceIdentifier {
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

export interface searchPendingArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchPendingArticles_searchArticles_content_owner_PublicUserDTO {
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
  resourceIdentifier: searchPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
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

export interface searchPendingArticles_searchArticles_content_owner_CommunityDTO {
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
  resourceIdentifier: searchPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchPendingArticles_searchArticles_content_owner = searchPendingArticles_searchArticles_content_owner_ArticleDTO | searchPendingArticles_searchArticles_content_owner_PublicUserDTO | searchPendingArticles_searchArticles_content_owner_CommunityDTO;

export interface searchPendingArticles_searchArticles_content {
  __typename: "ArticleDTO";
  resourceIdentifier: searchPendingArticles_searchArticles_content_resourceIdentifier | null;
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
  owner: searchPendingArticles_searchArticles_content_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface searchPendingArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Returns the page content.
   */
  content: (searchPendingArticles_searchArticles_content | null)[];
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchPendingArticles {
  /**
   * Search articles with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchArticles: searchPendingArticles_searchArticles;
}

export interface searchPendingArticlesVariables {
  size?: number | null;
  filter?: ArticleFilterInput | null;
}
