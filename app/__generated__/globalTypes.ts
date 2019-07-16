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
  authorIdEquals?: string | null;
  statusIn?: (ArticleStatusInput | null)[] | null;
  latestVersion?: boolean | null;
  idEquals?: string | null;
  ownerIdEquals?: string | null;
  dateCreatedLessThan?: any | null;
  containsTag?: string | null;
  dateCreatedGreaterThan?: any | null;
  checkpointEquals?: string | null;
  versionGreaterThan?: number | null;
  fullText?: string | null;
  ownerIdIn?: (string | null)[] | null;
  versionIn?: (number | null)[] | null;
}

export interface CollectionFilterInput {
  nameContains?: string | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  dateCreatedGreaterThan?: any | null;
  containingArticleId?: string | null;
  fullText?: string | null;
  dateUpdatedLessThan?: any | null;
  descriptionContains?: string | null;
  resourcesCountGreaterThan?: number | null;
  ownerIdEquals?: string | null;
}

export interface CommunityFilterInput {
  fullText?: string | null;
  nameContains?: string | null;
  membersIncludes?: string | null;
  dateUpdatedLessThan?: any | null;
  nameContain?: string | null;
  dateCreatedGreaterThan?: any | null;
  statusIn?: (CommunityStatusInput | null)[] | null;
  dateCreatedLessThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
}

export interface CommunityResourceFilterInput {
  statusEquals?: CommunityResourceStatusInput | null;
  resourceTypeEquals?: ResourceTypeInput | null;
}

export interface InvitationInput {
  secret?: string | null;
  email?: string | null;
  role?: CommunityPermissionInput | null;
}

export interface ResourceIdentifierInput {
  version?: number | null;
  id?: string | null;
  type?: ResourceTypeInput | null;
}

export interface SearchFilterInput {
  types?: (ResourceTypeInput | null)[] | null;
  dateCreatedGreaterThan?: any | null;
  dateUpdatedGreaterThan?: any | null;
  mustNotIncludeUserId?: (string | null)[] | null;
  dateUpdatedLessThan?: any | null;
  mustNotContainTag?: (string | null)[] | null;
  mustIncludeUserId?: (string | null)[] | null;
  dateCreatedLessThan?: any | null;
  mustContainTag?: (string | null)[] | null;
  type?: ResourceTypeInput | null;
}

export interface SearchParameterInput {
  highlightEnable?: boolean | null;
  highlightPostTag?: string | null;
  scoringMode?: ScoringModeInput | null;
  highlightPreTag?: string | null;
}

export interface SectionDTOInput {
  description?: string | null;
  resourcesId?: (ResourceIdentifierInput | null)[] | null;
  id?: string | null;
  name?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
