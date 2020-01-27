/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: HomepageComponentFragment
// ====================================================

export interface HomepageComponentFragment_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface HomepageComponentFragment_Categories_content {
  __typename: "StaticContentElementDTO";
  propertyName: string | null;
  description: string | null;
  image: string | null;
  link: string | null;
  linkhref: string | null;
}

export interface HomepageComponentFragment_Categories {
  __typename: "Categories";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Categories_content | null)[] | null;
}

export interface HomepageComponentFragment_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner = HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors {
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
  articles: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities | null)[];
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_ownerId {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_author {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner = HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author;
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
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors | null)[];
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
  ownerId: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_ownerId | null;
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
  voteResult: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner = HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources = HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections {
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
  resourcesId: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources | null)[];
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO {
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
  owner: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner = HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO_voteResult;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_author {
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
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_contributors {
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
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner = HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier | null;
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
  comments: HomepageComponentFragment_Featured_content_resource_ArticleDTO_comments;
  /**
   * Get vote result for the article
   */
  voteResult: HomepageComponentFragment_Featured_content_resource_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_Featured_content_resource_ArticleDTO_author;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_Featured_content_resource_ArticleDTO_contributors | null)[];
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_creator {
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
  publicUserName: string | null;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_members_content {
  __typename: "CommunityMemberDTO";
  /**
   * Community Member ID
   */
  id: string;
  /**
   * Community Member Role
   */
  role: CommunityPermissionInput;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_members {
  __typename: "ResponseBreakdownPage_CommunityMemberDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_members_content | null)[];
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approvedId {
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

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_pendingId {
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

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved = HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
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
   * Community creator (full profile)
   */
  creator: HomepageComponentFragment_Featured_content_resource_CommunityDTO_creator;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community Website
   */
  website: string | null;
  /**
   * Get community members list with filter, sorting and pagination.
   */
  members: HomepageComponentFragment_Featured_content_resource_CommunityDTO_members;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * List of approved curated content
   */
  approvedId: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved | null)[];
}

export type HomepageComponentFragment_Featured_content_resource = HomepageComponentFragment_Featured_content_resource_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO | HomepageComponentFragment_Featured_content_resource_ExternalLinkDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Featured_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: HomepageComponentFragment_Featured_content_resource;
}

export interface HomepageComponentFragment_Featured {
  __typename: "Featured";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Featured_content | null)[] | null;
}

export interface HomepageComponentFragment_Actions_content {
  __typename: "StaticContentElementDTO";
  actionName: string | null;
  link: string | null;
}

export interface HomepageComponentFragment_Actions {
  __typename: "Actions";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Actions_content | null)[] | null;
}

export interface HomepageComponentFragment_TopTags_content {
  __typename: "StaticContentElementDTO";
  tagName: string | null;
}

export interface HomepageComponentFragment_TopTags {
  __typename: "TopTags";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_TopTags_content | null)[] | null;
}

export interface HomepageComponentFragment_TopContributors_content_user {
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
   * User avatar URI
   */
  avatar: string | null;
}

export interface HomepageComponentFragment_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: HomepageComponentFragment_TopContributors_content_user;
}

export interface HomepageComponentFragment_TopContributors {
  __typename: "TopContributors";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_TopContributors_content | null)[] | null;
}

export interface HomepageComponentFragment_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner = HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors {
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
  articles: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors_communities | null)[];
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_ownerId {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_author {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner = HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content_author;
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
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_contributors | null)[];
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
  ownerId: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_ownerId | null;
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
  voteResult: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner = HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources = HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ExternalLinkDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections {
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
  resourcesId: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources | null)[];
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO {
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
  owner: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner = HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO_voteResult;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_author {
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
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_contributors {
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
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner = HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier | null;
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
  comments: HomepageComponentFragment_Promo_content_resource_ArticleDTO_comments;
  /**
   * Get vote result for the article
   */
  voteResult: HomepageComponentFragment_Promo_content_resource_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_Promo_content_resource_ArticleDTO_author;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_Promo_content_resource_ArticleDTO_contributors | null)[];
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_creator {
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
  publicUserName: string | null;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_members_content {
  __typename: "CommunityMemberDTO";
  /**
   * Community Member ID
   */
  id: string;
  /**
   * Community Member Role
   */
  role: CommunityPermissionInput;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_members {
  __typename: "ResponseBreakdownPage_CommunityMemberDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_members_content | null)[];
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approvedId {
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

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_pendingId {
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

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved = HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
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
   * Community creator (full profile)
   */
  creator: HomepageComponentFragment_Promo_content_resource_CommunityDTO_creator;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community Website
   */
  website: string | null;
  /**
   * Get community members list with filter, sorting and pagination.
   */
  members: HomepageComponentFragment_Promo_content_resource_CommunityDTO_members;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * List of approved curated content
   */
  approvedId: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved | null)[];
}

export type HomepageComponentFragment_Promo_content_resource = HomepageComponentFragment_Promo_content_resource_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO | HomepageComponentFragment_Promo_content_resource_ExternalLinkDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Promo_content {
  __typename: "ResourceIdentifier";
  /**
   * load the resource
   */
  resource: HomepageComponentFragment_Promo_content_resource;
}

export interface HomepageComponentFragment_Promo {
  __typename: "Promo";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_Promo_content | null)[] | null;
}

export interface HomepageComponentFragment_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_owner = HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string | null;
  contractAddress: string | null;
  name: string | null;
  image: string | null;
  externalUrl: string | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_communities {
  __typename: "MemberRoleCommunityDTO";
  /**
   * Community
   */
  community: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_communities_community;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors {
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
  articles: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_collections;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_links;
  /**
   * Get communities the user is member of mapped by role
   */
  communities: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors_communities | null)[];
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_ownerId {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_author {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner = HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments_content_author {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments_content_author;
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
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * NFTs associated with this article
   */
  associatedNfts: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_associatedNfts | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_resourceIdentifier | null;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_contributors | null)[];
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
  ownerId: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_ownerId | null;
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
  voteResult: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_author;
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_owner | null;
  /**
   * Get a paginated list of comments for this article
   */
  comments: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO_comments;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner = HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO_voteResult;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources = HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ExternalLinkDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections {
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
  resourcesId: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId | null)[] | null;
  /**
   * load the resources within this section
   */
  resources: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources | null)[];
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO {
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
  owner: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner | null;
  /**
   * Sections of the collections
   */
  sections: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections | null)[] | null;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_ownerId {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner = HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_url {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkTitle {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkDescription {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_summary {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_authorName {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments_content_author {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments_content {
  __typename: "CommentDTO";
  /**
   * Comment author (full profile)
   */
  author: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments_content_author;
  /**
   * Date the comment was published
   */
  posted: any;
  /**
   * Comment
   */
  body: string;
}

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments_content | null)[];
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_voteResult {
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

export interface HomepageComponentFragment_LatestContent_content_ExternalLinkDTO {
  __typename: "ExternalLinkDTO";
  /**
   * External link ID
   */
  id: string;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_resourceIdentifier | null;
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
  ownerId: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_ownerId | null;
  /**
   * load the external link owner (user or community resource type)
   */
  owner: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_owner | null;
  /**
   * External link submitter (full profile)
   */
  submitter: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_submitter;
  /**
   * The link url
   */
  url: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_url;
  /**
   * The link title
   */
  linkTitle: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkTitle;
  /**
   * The description of the link, obtained via metadata
   */
  linkDescription: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_linkDescription | null;
  /**
   * The user input summary of the link
   */
  summary: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_summary | null;
  /**
   * Link attributes
   */
  linkAttributes: any | null;
  /**
   * The link content author
   */
  authorName: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_authorName;
  /**
   * Get a paginated list of comments for this external link
   */
  comments: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_comments;
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
  voteResult: HomepageComponentFragment_LatestContent_content_ExternalLinkDTO_voteResult;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_voteResult {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_author {
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
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_contributors {
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
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO {
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
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type HomepageComponentFragment_LatestContent_content_ArticleDTO_owner = HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier | null;
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
  comments: HomepageComponentFragment_LatestContent_content_ArticleDTO_comments;
  /**
   * Get vote result for the article
   */
  voteResult: HomepageComponentFragment_LatestContent_content_ArticleDTO_voteResult;
  /**
   * Article author (full profile)
   */
  author: HomepageComponentFragment_LatestContent_content_ArticleDTO_author;
  /**
   * Returns a list of contributors (PublicUserDTO) for this ArticleDTO
   * This operation can only be performed by logged user
   */
  contributors: (HomepageComponentFragment_LatestContent_content_ArticleDTO_contributors | null)[];
  /**
   * load the article owner (user or community resource type)
   */
  owner: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner | null;
  /**
   * The comment describing this version update of the article
   */
  updateComment: string | null;
  /**
   * Check if the article is already bookmarked by the current user
   */
  isBookmarked: boolean;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_creator {
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
  publicUserName: string | null;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_members_content {
  __typename: "CommunityMemberDTO";
  /**
   * Community Member ID
   */
  id: string;
  /**
   * Community Member Role
   */
  role: CommunityPermissionInput;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_members {
  __typename: "ResponseBreakdownPage_CommunityMemberDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Returns the page content.
   */
  content: (HomepageComponentFragment_LatestContent_content_CommunityDTO_members_content | null)[];
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approvedId {
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

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_pendingId {
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

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  /**
   * Collection ID
   */
  id: string;
}

export type HomepageComponentFragment_LatestContent_content_CommunityDTO_approved = HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  name: string;
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
   * Community creator (full profile)
   */
  creator: HomepageComponentFragment_LatestContent_content_CommunityDTO_creator;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community Description
   */
  description: string | null;
  /**
   * Community Website
   */
  website: string | null;
  /**
   * Get community members list with filter, sorting and pagination.
   */
  members: HomepageComponentFragment_LatestContent_content_CommunityDTO_members;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  /**
   * Community social data (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Community tags
   */
  tags: (string | null)[] | null;
  /**
   * Community custom attribtes
   */
  attributes: any | null;
  /**
   * List of approved curated content
   */
  approvedId: (HomepageComponentFragment_LatestContent_content_CommunityDTO_approvedId | null)[] | null;
  /**
   * List of pending curated content
   */
  pendingId: (HomepageComponentFragment_LatestContent_content_CommunityDTO_pendingId | null)[] | null;
  /**
   * load the approved curated resources associated to this community
   */
  approved: (HomepageComponentFragment_LatestContent_content_CommunityDTO_approved | null)[];
}

export type HomepageComponentFragment_LatestContent_content = HomepageComponentFragment_LatestContent_content_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO | HomepageComponentFragment_LatestContent_content_ExternalLinkDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO;

export interface HomepageComponentFragment_LatestContent {
  __typename: "LatestContent";
  type: string | null;
  properties: any | null;
  content: (HomepageComponentFragment_LatestContent_content | null)[] | null;
}

export interface HomepageComponentFragment_Newsletter {
  __typename: "Newsletter";
  type: string | null;
  properties: any | null;
}

export interface HomepageComponentFragment_Import {
  __typename: "Import";
  type: string | null;
  properties: any | null;
}

export type HomepageComponentFragment = HomepageComponentFragment_AbstractComponent | HomepageComponentFragment_Categories | HomepageComponentFragment_Featured | HomepageComponentFragment_Actions | HomepageComponentFragment_TopTags | HomepageComponentFragment_TopContributors | HomepageComponentFragment_Promo | HomepageComponentFragment_LatestContent | HomepageComponentFragment_Newsletter | HomepageComponentFragment_Import;
