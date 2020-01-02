/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput, SearchFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: relatedArticles
// ====================================================

export interface relatedArticles_searchMoreLikeThis_content_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  /**
   * User full name
   */
  name: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
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
   * Article author (full profile)
   */
  author: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_author;
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
   * Set of optional attributes fields
   */
  attributes: any | null;
  /**
   * IPFS Content hash
   */
  contentHash: string;
  /**
   * Checkpoint file (null if the article is not escalated on-chain)
   */
  checkpoint: string | null;
  /**
   * Tags list
   */
  tags: (string | null)[] | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_comments;
  /**
   * Get vote result for the article
   */
  voteResult: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_voteResult;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier {
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

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
  /**
   * Collection name
   */
  name: string;
  /**
   * Collection description
   */
  description: string | null;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   *  Background image
   */
  background: string | null;
  /**
   * Last date updated
   */
  dateUpdated: any;
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
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
   * Community Name
   */
  name: string;
  /**
   * Community Description
   */
  description: string | null;
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
}

export type relatedArticles_searchMoreLikeThis_content_resource = relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO | relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO | relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO | relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO;

export interface relatedArticles_searchMoreLikeThis_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resourceIdentifier | null;
  /**
   * load the resource associated to this search match
   */
  resource: relatedArticles_searchMoreLikeThis_content_resource;
}

export interface relatedArticles_searchMoreLikeThis {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Total amount of elements per type.
   */
  totalElementsBreakdown: any | null;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Returns the page content.
   */
  content: (relatedArticles_searchMoreLikeThis_content | null)[];
}

export interface relatedArticles {
  /**
   * Perform a parametrized global search query to find related resources with pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchMoreLikeThis: relatedArticles_searchMoreLikeThis;
}

export interface relatedArticlesVariables {
  page?: number | null;
  size?: number | null;
  resourceId: ResourceIdentifierInput;
  filter?: SearchFilterInput | null;
}
