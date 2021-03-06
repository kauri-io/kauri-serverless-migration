/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CollectionFilterInput, DirectionInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCollectionsForUser
// ====================================================

export interface getCollectionsForUser_searchCollections_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_owner_PublicUserDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCollectionsForUser_searchCollections_content_owner_CommunityDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_owner_CommunityDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCollectionsForUser_searchCollections_content_owner = getCollectionsForUser_searchCollections_content_owner_ArticleDTO | getCollectionsForUser_searchCollections_content_owner_PublicUserDTO | getCollectionsForUser_searchCollections_content_owner_CommunityDTO;

export interface getCollectionsForUser_searchCollections_content_sections_resourcesId {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_communities_community {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_communities_community;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors {
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
  articles: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors_communities | null)[];
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_ownerId {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_voteResult {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_author {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner = getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_ArticleDTO | getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_PublicUserDTO | getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments_content_author {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments_content_author;
  /**
   * Comment ID
   */
  id: string;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
  /**
   * Reply to (Comment ID)
   */
  replyTo: string | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments_content | null)[];
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_tips {
  __typename: "TipTotalsDTO";
  totals: any | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_contributors | null)[];
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
   * Owner of the article (can be a USER or COMMUNITY)
   */
  ownerId: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_ownerId | null;
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
  voteResult: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
  tips: getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO_tips | null;
  hasTipped: boolean;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_ownerId {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner = getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_ArticleDTO | getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_PublicUserDTO | getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner_CommunityDTO;

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_submitter {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  name: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_url {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_linkTitle {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_linkDescription {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_summary {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_authorName {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments_content_author {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
  /**
   * Comment ID
   */
  id: string;
  /**
   * Reply to (Comment ID)
   */
  replyTo: string | null;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments_content | null)[];
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_voteResult {
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

export interface getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_resourceIdentifier | null;
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
   * Check if the external link is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * The link owner
   */
  ownerId: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_comments;
  /**
   * The link content author
   */
  authorSocial: any | null;
  /**
   * Tags associated with the link
   */
  tags: (string | null)[] | null;
  /**
   * Get vote result for the external link
   */
  voteResult: getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO_voteResult;
}

export type getCollectionsForUser_searchCollections_content_sections_resources = getCollectionsForUser_searchCollections_content_sections_resources_PublicUserDTO | getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO | getCollectionsForUser_searchCollections_content_sections_resources_ExternalLinkDTO;

export interface getCollectionsForUser_searchCollections_content_sections {
  __typename: "SectionDTO";
  /**
   * Section ID
   */
  id: string | null;
  /**
   * Section name
   */
  name: string | null;
  /**
   * Section descriptions
   */
  description: string | null;
  /**
   * List of resource identifiers
   */
  resourcesId: (getCollectionsForUser_searchCollections_content_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (getCollectionsForUser_searchCollections_content_sections_resources | null)[];
}

export interface getCollectionsForUser_searchCollections_content_resourceIdentifier {
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

export interface getCollectionsForUser_searchCollections_content {
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
   * Date created
   */
  dateCreated: any;
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
  /**
   * load the collection owner (user or community resource type)
   */
  owner: getCollectionsForUser_searchCollections_content_owner | null;
  /**
   * Sections of the collections
   */
  sections: (getCollectionsForUser_searchCollections_content_sections | null)[] | null;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface getCollectionsForUser_searchCollections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (getCollectionsForUser_searchCollections_content | null)[];
  /**
   * Returns true if this is the last page.
   */
  isLast: boolean;
}

export interface getCollectionsForUser {
  /**
   * Search collections with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchCollections: getCollectionsForUser_searchCollections;
}

export interface getCollectionsForUserVariables {
  filter?: CollectionFilterInput | null;
  size?: number | null;
  page?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
}
