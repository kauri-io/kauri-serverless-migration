/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchPersonalArticles
// ====================================================

export interface searchPersonalArticles_searchArticles_content_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface searchPersonalArticles_searchArticles_content_resourceIdentifier {
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

export interface searchPersonalArticles_searchArticles_content_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchPersonalArticles_searchArticles_content_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchPersonalArticles_searchArticles_content_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchPersonalArticles_searchArticles_content_contributors_communities_community {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
}

export interface searchPersonalArticles_searchArticles_content_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: searchPersonalArticles_searchArticles_content_contributors_communities_community;
}

export interface searchPersonalArticles_searchArticles_content_contributors {
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
  /**
   * User title
   */
  title: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Returns a page of ArticleDTO authored by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  articles: searchPersonalArticles_searchArticles_content_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: searchPersonalArticles_searchArticles_content_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: searchPersonalArticles_searchArticles_content_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (searchPersonalArticles_searchArticles_content_contributors_communities | null)[];
}

export interface searchPersonalArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
  /**
   * Vote count: Number of votes
   */
  count: any;
  /**
   * Returns true if a logged user has already voted
   */
  hasVoted: boolean | null;
  /**
   * Count per vote
   */
  quantity: any;
}

export interface searchPersonalArticles_searchArticles_content_author {
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

export interface searchPersonalArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchPersonalArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchPersonalArticles_searchArticles_content_owner_PublicUserDTO {
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
  resourceIdentifier: searchPersonalArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchPersonalArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
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

export interface searchPersonalArticles_searchArticles_content_owner_CommunityDTO {
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
  resourceIdentifier: searchPersonalArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchPersonalArticles_searchArticles_content_owner = searchPersonalArticles_searchArticles_content_owner_ArticleDTO | searchPersonalArticles_searchArticles_content_owner_PublicUserDTO | searchPersonalArticles_searchArticles_content_owner_CommunityDTO;

export interface searchPersonalArticles_searchArticles_content_comments_content_author {
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

export interface searchPersonalArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: searchPersonalArticles_searchArticles_content_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface searchPersonalArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (searchPersonalArticles_searchArticles_content_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns true if this is the last page.
   */
  isLast: boolean;
}

export interface searchPersonalArticles_searchArticles_content {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (searchPersonalArticles_searchArticles_content_associatedNfts | null)[] | null;
  resourceIdentifier: searchPersonalArticles_searchArticles_content_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (searchPersonalArticles_searchArticles_content_contributors | null)[];
  /**
   * Check if the article was already read by the current user
   */
  isRead: boolean;
  /**
   * Description of the article - First 500 characters of the plaintext content)
   */
  description: string | null;
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
   * Content of the article (most likely to be plain markdown text)
   */
  content: string;
  /**
   * Author of the article (USER only)
   */
  authorId: string;
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
   * Get vote result for the article
   */
  voteResult: searchPersonalArticles_searchArticles_content_voteResult;
  /**
   * Article author (full profile)
   */
  author: searchPersonalArticles_searchArticles_content_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: searchPersonalArticles_searchArticles_content_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: searchPersonalArticles_searchArticles_content_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface searchPersonalArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns true if this is the last page.
   */
  isLast: boolean;
  /**
   * Returns the page content.
   */
  content: (searchPersonalArticles_searchArticles_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
}

export interface searchPersonalArticles {
  /**
   * Search articles with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchArticles: searchPersonalArticles_searchArticles;
}

export interface searchPersonalArticlesVariables {
  userId?: string | null;
  size?: number | null;
  page?: number | null;
  text?: string | null;
}
