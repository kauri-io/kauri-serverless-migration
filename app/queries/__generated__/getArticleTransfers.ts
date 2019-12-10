/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getArticleTransfers
// ====================================================

export interface getArticleTransfers_getArticleTransfers_content_article_resourceIdentifier {
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

export interface getArticleTransfers_getArticleTransfers_content_article_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO_resourceIdentifier {
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

export interface getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO {
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
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO_resourceIdentifier {
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

export interface getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO {
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
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO_resourceIdentifier | null;
}

export type getArticleTransfers_getArticleTransfers_content_article_owner = getArticleTransfers_getArticleTransfers_content_article_owner_ArticleDTO | getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO | getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO;

export interface getArticleTransfers_getArticleTransfers_content_article {
  __typename: "ArticleDTO";
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_resourceIdentifier | null;
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
  owner: getArticleTransfers_getArticleTransfers_content_article_owner | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getArticleTransfers_getArticleTransfers_content_transferrer {
  __typename: "ResourceIdentifier";
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource version (article)
   */
  version: number | null;
}

export interface getArticleTransfers_getArticleTransfers_content_recipient {
  __typename: "ResourceIdentifier";
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource version (article)
   */
  version: number | null;
}

export interface getArticleTransfers_getArticleTransfers_content {
  __typename: "ArticleTransferDTO";
  /**
   * ID of article
   */
  id: string | null;
  /**
   * Article
   */
  article: getArticleTransfers_getArticleTransfers_content_article | null;
  /**
   * Initiator of the transfer
   */
  transferrer: getArticleTransfers_getArticleTransfers_content_transferrer | null;
  /**
   * Recipient of the transfer
   */
  recipient: getArticleTransfers_getArticleTransfers_content_recipient | null;
}

export interface getArticleTransfers_getArticleTransfers {
  __typename: "ResponsePage_ArticleTransferDTO";
  /**
   * Returns the page content.
   */
  content: (getArticleTransfers_getArticleTransfers_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getArticleTransfers {
  /**
   * Get Article transfers for a given recipient user account with pagination and sorting.
   * This operation can be performed anonymously
   */
  getArticleTransfers: getArticleTransfers_getArticleTransfers;
}

export interface getArticleTransfersVariables {
  page?: number | null;
  size?: number | null;
  recipient: string;
  sort?: string | null;
  dir?: DirectionInput | null;
}
