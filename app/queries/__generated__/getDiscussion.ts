/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, DiscussionStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getDiscussion
// ====================================================

export interface getDiscussion_getDiscussion_resourceIdentifier {
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

export interface getDiscussion_getDiscussion_parentId {
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

export interface getDiscussion_getDiscussion_author_resourceIdentifier {
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

export interface getDiscussion_getDiscussion_author {
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
  resourceIdentifier: getDiscussion_getDiscussion_author_resourceIdentifier | null;
}

export interface getDiscussion_getDiscussion_contributors_content_resource_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getDiscussion_getDiscussion_contributors_content_resource_PublicUserDTO_resourceIdentifier {
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

export interface getDiscussion_getDiscussion_contributors_content_resource_PublicUserDTO {
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
  resourceIdentifier: getDiscussion_getDiscussion_contributors_content_resource_PublicUserDTO_resourceIdentifier | null;
}

export type getDiscussion_getDiscussion_contributors_content_resource = getDiscussion_getDiscussion_contributors_content_resource_ArticleDTO | getDiscussion_getDiscussion_contributors_content_resource_PublicUserDTO;

export interface getDiscussion_getDiscussion_contributors_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: getDiscussion_getDiscussion_contributors_content_resource;
}

export interface getDiscussion_getDiscussion_contributors {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (getDiscussion_getDiscussion_contributors_content | null)[];
}

export interface getDiscussion_getDiscussion_comments_content_author_resourceIdentifier {
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

export interface getDiscussion_getDiscussion_comments_content_author {
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
  resourceIdentifier: getDiscussion_getDiscussion_comments_content_author_resourceIdentifier | null;
}

export interface getDiscussion_getDiscussion_comments_content {
  __typename: "CommentDTO";
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment author (full profile)
   */
  author: getDiscussion_getDiscussion_comments_content_author;
  /**
   * Comment
   */
  body: string;
  /**
   * Reply to (Comment ID)
   */
  replyTo: string | null;
}

export interface getDiscussion_getDiscussion_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getDiscussion_getDiscussion_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getDiscussion_getDiscussion_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
  /**
   * Returns true if a logged user has already voted
   */
  hasVoted: boolean | null;
}

export interface getDiscussion_getDiscussion {
  __typename: "DiscussionDTO";
  resourceIdentifier: getDiscussion_getDiscussion_resourceIdentifier | null;
  /**
   * Resource against which the discussion was published
   */
  parentId: getDiscussion_getDiscussion_parentId;
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
  author: getDiscussion_getDiscussion_author;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   * Get list of contributors on a discussion (author + commenters)
   */
  contributors: getDiscussion_getDiscussion_contributors;
  /**
   * Get a paginated list of comments for a discussion
   */
  comments: getDiscussion_getDiscussion_comments;
  /**
   * Get vote result for the discussion
   */
  voteResult: getDiscussion_getDiscussion_voteResult;
  /**
   * Get last activity date
   */
  lastActivity: any;
}

export interface getDiscussion {
  /**
   * Get a discussion
   * This operation can be performed anonymously.
   */
  getDiscussion: getDiscussion_getDiscussion;
}

export interface getDiscussionVariables {
  id: string;
}
