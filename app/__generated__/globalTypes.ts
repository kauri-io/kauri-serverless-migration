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

export enum ResourceTypeInput {
  ARTICLE = "ARTICLE",
  COLLECTION = "COLLECTION",
  COMMENT = "COMMENT",
  COMMUNITY = "COMMUNITY",
  CURATED_LIST = "CURATED_LIST",
  INVITATION = "INVITATION",
  REQUEST = "REQUEST",
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

export enum UserStatusInput {
  CREATED = "CREATED",
  EMAIL_VERIFIED = "EMAIL_VERIFIED",
  NOT_REGISTERED = "NOT_REGISTERED",
}

export interface ArticleFilterInput {
  checkpointEquals?: string | null;
  fullText?: string | null;
  authorIdEquals?: string | null;
  ownerIdIn?: (string | null)[] | null;
  containsTag?: string | null;
  versionGreaterThan?: number | null;
  dateCreatedLessThan?: any | null;
  latestVersion?: boolean | null;
  versionIn?: (number | null)[] | null;
  statusIn?: (ArticleStatusInput | null)[] | null;
  idEquals?: string | null;
  dateCreatedGreaterThan?: any | null;
  ownerIdEquals?: string | null;
}

export interface CollectionFilterInput {
  fullText?: string | null;
  dateCreatedGreaterThan?: any | null;
  containingArticleId?: string | null;
  descriptionContains?: string | null;
  resourcesCountGreaterThan?: number | null;
  dateUpdatedGreaterThan?: any | null;
  ownerIdEquals?: string | null;
  nameContains?: string | null;
  dateUpdatedLessThan?: any | null;
  dateCreatedLessThan?: any | null;
}

export interface CommunityFilterInput {
  fullText?: string | null;
  nameContain?: string | null;
  statusIn?: (CommunityStatusInput | null)[] | null;
  membersIncludes?: string | null;
  dateCreatedGreaterThan?: any | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  nameContains?: string | null;
}

export interface CommunityResourceFilterInput {
  resourceTypeEquals?: ResourceTypeInput | null;
  statusEquals?: CommunityResourceStatusInput | null;
}

export interface InvitationInput {
  email?: string | null;
  secret?: string | null;
  role?: CommunityPermissionInput | null;
}

export interface ResourceIdentifierInput {
  type?: ResourceTypeInput | null;
  id?: string | null;
  version?: number | null;
}

export interface SearchFilterInput {
  dateUpdatedLessThan?: any | null;
  type?: ResourceTypeInput | null;
  mustIncludeUserId?: (string | null)[] | null;
  dateCreatedLessThan?: any | null;
  types?: (ResourceTypeInput | null)[] | null;
  mustContainTag?: (string | null)[] | null;
  mustNotIncludeUserId?: (string | null)[] | null;
  mustNotContainTag?: (string | null)[] | null;
  dateUpdatedGreaterThan?: any | null;
  dateCreatedGreaterThan?: any | null;
}

export interface SearchParameterInput {
  highlightPostTag?: string | null;
  highlightPreTag?: string | null;
  highlightEnable?: boolean | null;
  scoringMode?: ScoringModeInput | null;
}

export interface SectionDTOInput {
  name?: string | null;
  resourcesId?: (ResourceIdentifierInput | null)[] | null;
  description?: string | null;
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
