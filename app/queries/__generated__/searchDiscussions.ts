/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, DiscussionFilterInput, ResourceTypeInput, DiscussionStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchDiscussions
// ====================================================

export interface searchDiscussions_searchDiscussions_content_resourceIdentifier {
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

export interface searchDiscussions_searchDiscussions_content_parentId {
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

export interface searchDiscussions_searchDiscussions_content_author_resourceIdentifier {
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

export interface searchDiscussions_searchDiscussions_content_author {
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
  resourceIdentifier: searchDiscussions_searchDiscussions_content_author_resourceIdentifier | null;
}

export interface searchDiscussions_searchDiscussions_content_contributors_content_resource_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchDiscussions_searchDiscussions_content_contributors_content_resource_PublicUserDTO_resourceIdentifier {
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

export interface searchDiscussions_searchDiscussions_content_contributors_content_resource_PublicUserDTO {
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
  resourceIdentifier: searchDiscussions_searchDiscussions_content_contributors_content_resource_PublicUserDTO_resourceIdentifier | null;
}

export type searchDiscussions_searchDiscussions_content_contributors_content_resource = searchDiscussions_searchDiscussions_content_contributors_content_resource_ArticleDTO | searchDiscussions_searchDiscussions_content_contributors_content_resource_PublicUserDTO;

export interface searchDiscussions_searchDiscussions_content_contributors_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: searchDiscussions_searchDiscussions_content_contributors_content_resource;
}

export interface searchDiscussions_searchDiscussions_content_contributors {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (searchDiscussions_searchDiscussions_content_contributors_content | null)[];
}

export interface searchDiscussions_searchDiscussions_content_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface searchDiscussions_searchDiscussions_content_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface searchDiscussions_searchDiscussions_content {
  __typename: "DiscussionDTO";
  resourceIdentifier: searchDiscussions_searchDiscussions_content_resourceIdentifier | null;
  /**
   * Resource against which the discussion was published
   */
  parentId: searchDiscussions_searchDiscussions_content_parentId;
  /**
   * Discussion ID
   */
  id: string;
  /**
   * Discussion Status
   */
  status: DiscussionStatusInput;
  /**
   * Title
   */
  title: string;
  /**
   * Message
   */
  message: string;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Last date updated
   */
  dateUpdated: any;
  /**
   * Author ID of the comment
   */
  authorId: string;
  /**
   * Discussion author (full profile)
   */
  author: searchDiscussions_searchDiscussions_content_author;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   * Get list of contributors on a discussion (author + commenters)
   */
  contributors: searchDiscussions_searchDiscussions_content_contributors;
  /**
   * Get last activity date
   */
  lastActivity: any;
  /**
   * Get a paginated list of comments for a discussion
   */
  comments: searchDiscussions_searchDiscussions_content_comments;
  /**
   * Get vote result for the discussion
   */
  voteResult: searchDiscussions_searchDiscussions_content_voteResult;
}

export interface searchDiscussions_searchDiscussions {
  __typename: "ResponsePage_DiscussionDTO";
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
  /**
   * Returns the page content.
   */
  content: (searchDiscussions_searchDiscussions_content | null)[];
}

export interface searchDiscussions {
  /**
   * Get a paginated list of discussions given filter, sorting and pagination attributes
   * This operation can be performed anonymously.
   */
  searchDiscussions: searchDiscussions_searchDiscussions;
}

export interface searchDiscussionsVariables {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
  filter?: DiscussionFilterInput | null;
}
