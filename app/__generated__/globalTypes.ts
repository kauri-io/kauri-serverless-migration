/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ArticleStatusInput {
  CANCELLED = "CANCELLED",
  DRAFT = "DRAFT",
  PENDING = "PENDING",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED",
}

export enum CommunityInvitationStatusInput {
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum CommunityPermissionInput {
  ADMIN = "ADMIN",
  BANNED = "BANNED",
  BASIC = "BASIC",
  CURATOR = "CURATOR",
}

export enum CommunityResourceStatusInput {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum CommunityStatusInput {
  CLOSED = "CLOSED",
  CREATED = "CREATED",
  OPENED = "OPENED",
}

export enum DirectionInput {
  ASC = "ASC",
  DESC = "DESC",
}

export enum DiscussionStatusInput {
  CLOSED = "CLOSED",
  DELETED = "DELETED",
  OPENED = "OPENED",
}

export enum EventStatusInput {
  ERROR = "ERROR",
  NOTHINGTODO = "NOTHINGTODO",
  SUCCESS = "SUCCESS",
}

export enum ResourceTypeInput {
  ARTICLE = "ARTICLE",
  COLLECTION = "COLLECTION",
  COMMENT = "COMMENT",
  COMMUNITY = "COMMUNITY",
  CURATED_LIST = "CURATED_LIST",
  DISCUSSION = "DISCUSSION",
  INVITATION = "INVITATION",
  LINK = "LINK",
  REQUEST = "REQUEST",
  SERIES = "SERIES",
  TEMPLATE = "TEMPLATE",
  USER = "USER",
}

export enum ScoringModeInput {
  LAST_POSTED = "LAST_POSTED",
  LAST_UPDATED = "LAST_UPDATED",
  MOST_POPULAR = "MOST_POPULAR",
  NONE = "NONE",
  RANDOM = "RANDOM",
  TRENDING = "TRENDING",
}

export enum TipStatusInput {
  CONFIRMED = "CONFIRMED",
  PENDING = "PENDING",
}

export enum UserStatusInput {
  CREATED = "CREATED",
  EMAIL_VERIFIED = "EMAIL_VERIFIED",
  NOT_REGISTERED = "NOT_REGISTERED",
}

export interface ArticleFilterInput {
  authorIdEquals?: string | null;
  checkpointEquals?: string | null;
  containsTag?: string | null;
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  fullText?: string | null;
  idEquals?: string | null;
  latestVersion?: boolean | null;
  ownerIdEquals?: string | null;
  ownerIdIn?: (string | null)[] | null;
  statusIn?: (ArticleStatusInput | null)[] | null;
  versionGreaterThan?: number | null;
  versionIn?: (number | null)[] | null;
}

export interface CollectionFilterInput {
  containingArticleId?: string | null;
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  descriptionContains?: string | null;
  fullText?: string | null;
  nameContains?: string | null;
  ownerIdEquals?: string | null;
  resourcesCountGreaterThan?: number | null;
}

export interface CommunityFilterInput {
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  fullText?: string | null;
  membersIncludes?: string | null;
  nameContain?: string | null;
  nameContains?: string | null;
  statusIn?: (CommunityStatusInput | null)[] | null;
}

export interface CommunityInvitationFilterInput {
  dateAddedGreaterThan?: any | null;
  dateAddedLessThan?: any | null;
  deduplicateByEmail?: boolean | null;
  statusIn?: (CommunityInvitationStatusInput | null)[] | null;
}

export interface CommunityMemberFilterInput {
  roleIn?: (CommunityPermissionInput | null)[] | null;
}

export interface CommunityResourceFilterInput {
  resourceTypeEquals?: ResourceTypeInput | null;
  resourceTypeIn?: (ResourceTypeInput | null)[] | null;
  statusEquals?: CommunityResourceStatusInput | null;
}

export interface DiscussionFilterInput {
  authorIdEquals?: string | null;
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  fullText?: string | null;
  messageContains?: string | null;
  parentResourceIdIn?: (string | null)[] | null;
  parentResourceTypeIn?: (ResourceTypeInput | null)[] | null;
  statusIn?: (DiscussionStatusInput | null)[] | null;
  titleContains?: string | null;
}

export interface ExternalLinkFilterInput {
  containsTag?: string | null;
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  descriptionContains?: string | null;
  idEquals?: string | null;
  ownerIdEquals?: string | null;
  submitterIdEquals?: string | null;
  summaryContains?: string | null;
  titleContains?: string | null;
}

export interface InvitationInput {
  email: string;
  role: CommunityPermissionInput;
  secret?: string | null;
}

export interface ResourceIdentifierInput {
  id: string;
  type: ResourceTypeInput;
  version?: number | null;
}

export interface SearchFilterInput {
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  mustContainTag?: (string | null)[] | null;
  mustIncludeUserId?: (string | null)[] | null;
  mustNotContainTag?: (string | null)[] | null;
  mustNotIncludeUserId?: (string | null)[] | null;
  type?: ResourceTypeInput | null;
  types?: (ResourceTypeInput | null)[] | null;
}

export interface SearchParameterInput {
  highlightEnable?: boolean | null;
  highlightPostTag?: string | null;
  highlightPreTag?: string | null;
  scoringMode?: ScoringModeInput | null;
}

export interface SectionDTOInput {
  description?: string | null;
  id?: string | null;
  name?: string | null;
  resourcesId?: (ResourceIdentifierInput | null)[] | null;
}

export interface TipFilterInput {
  includeReceived?: boolean | null;
  includeSent?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
