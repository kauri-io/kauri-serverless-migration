/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, DiscussionStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: DiscussionCardFragment
// ====================================================

export interface DiscussionCardFragment_resourceIdentifier {
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

export interface DiscussionCardFragment_parentId {
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

export interface DiscussionCardFragment_author_resourceIdentifier {
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

export interface DiscussionCardFragment_author {
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
  resourceIdentifier: DiscussionCardFragment_author_resourceIdentifier | null;
}

export interface DiscussionCardFragment_contributors_content_resource_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface DiscussionCardFragment_contributors_content_resource_PublicUserDTO_resourceIdentifier {
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

export interface DiscussionCardFragment_contributors_content_resource_PublicUserDTO {
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
  resourceIdentifier: DiscussionCardFragment_contributors_content_resource_PublicUserDTO_resourceIdentifier | null;
}

export type DiscussionCardFragment_contributors_content_resource = DiscussionCardFragment_contributors_content_resource_ArticleDTO | DiscussionCardFragment_contributors_content_resource_PublicUserDTO;

export interface DiscussionCardFragment_contributors_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: DiscussionCardFragment_contributors_content_resource;
}

export interface DiscussionCardFragment_contributors {
  __typename: "ResponsePage_ResourceIdentifier";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (DiscussionCardFragment_contributors_content | null)[];
}

export interface DiscussionCardFragment_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface DiscussionCardFragment_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface DiscussionCardFragment {
  __typename: "DiscussionDTO";
  resourceIdentifier: DiscussionCardFragment_resourceIdentifier | null;
  /**
   * Resource against which the discussion was published
   */
  parentId: DiscussionCardFragment_parentId;
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
  author: DiscussionCardFragment_author;
  /**
   * Tags
   */
  tags: (string | null)[] | null;
  /**
   * Get list of contributors on a discussion (author + commenters)
   */
  contributors: DiscussionCardFragment_contributors;
  /**
   * Get last activity date
   */
  lastActivity: any;
  /**
   * Get a paginated list of comments for a discussion
   */
  comments: DiscussionCardFragment_comments;
  /**
   * Get vote result for the discussion
   */
  voteResult: DiscussionCardFragment_voteResult;
}
