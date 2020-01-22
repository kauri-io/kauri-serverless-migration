/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, DiscussionStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: DiscussionViewFragment
// ====================================================

export interface DiscussionViewFragment_resourceIdentifier {
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

export interface DiscussionViewFragment_parentId {
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

export interface DiscussionViewFragment_author_resourceIdentifier {
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

export interface DiscussionViewFragment_author {
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
  resourceIdentifier: DiscussionViewFragment_author_resourceIdentifier | null;
}

export interface DiscussionViewFragment_contributors_content_resource_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface DiscussionViewFragment_contributors_content_resource_PublicUserDTO_resourceIdentifier {
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

export interface DiscussionViewFragment_contributors_content_resource_PublicUserDTO {
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
  resourceIdentifier: DiscussionViewFragment_contributors_content_resource_PublicUserDTO_resourceIdentifier | null;
}

export type DiscussionViewFragment_contributors_content_resource = DiscussionViewFragment_contributors_content_resource_ArticleDTO | DiscussionViewFragment_contributors_content_resource_PublicUserDTO;

export interface DiscussionViewFragment_contributors_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: DiscussionViewFragment_contributors_content_resource;
}

export interface DiscussionViewFragment_contributors {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (DiscussionViewFragment_contributors_content | null)[];
}

export interface DiscussionViewFragment_comments_content_author_resourceIdentifier {
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

export interface DiscussionViewFragment_comments_content_author {
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
  resourceIdentifier: DiscussionViewFragment_comments_content_author_resourceIdentifier | null;
}

export interface DiscussionViewFragment_comments_content {
  __typename: "CommentDTO";
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment author (full profile)
   */
  author: DiscussionViewFragment_comments_content_author;
  /**
   * Comment
   */
  body: string;
  /**
   * Reply to (Comment ID)
   */
  replyTo: string | null;
}

export interface DiscussionViewFragment_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (DiscussionViewFragment_comments_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface DiscussionViewFragment_voteResult {
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

export interface DiscussionViewFragment {
  __typename: "DiscussionDTO";
  resourceIdentifier: DiscussionViewFragment_resourceIdentifier | null;
  /**
   * Resource against which the discussion was published
   */
  parentId: DiscussionViewFragment_parentId;
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
  author: DiscussionViewFragment_author;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   * Get list of contributors on a discussion (author + commenters)
   */
  contributors: DiscussionViewFragment_contributors;
  /**
   * Get a paginated list of comments for a discussion
   */
  comments: DiscussionViewFragment_comments;
  /**
   * Get vote result for the discussion
   */
  voteResult: DiscussionViewFragment_voteResult;
  /**
   * Get last activity date
   */
  lastActivity: any;
}
