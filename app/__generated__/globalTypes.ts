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
  idEquals?: string | null;
  latestVersion?: boolean | null;
  ownerIdEquals?: string | null;
  dateCreatedLessThan?: any | null;
  containsTag?: string | null;
  checkpointEquals?: string | null;
  versionIn?: (number | null)[] | null;
  fullText?: string | null;
  versionGreaterThan?: number | null;
  ownerIdIn?: (string | null)[] | null;
  statusIn?: (ArticleStatusInput | null)[] | null;
  dateCreatedGreaterThan?: any | null;
}

export interface CollectionFilterInput {
  ownerIdEquals?: string | null;
  dateUpdatedGreaterThan?: any | null;
  nameContains?: string | null;
  fullText?: string | null;
  descriptionContains?: string | null;
  dateCreatedLessThan?: any | null;
  containingArticleId?: string | null;
  resourcesCountGreaterThan?: number | null;
  dateCreatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
}

export interface CommunityFilterInput {
  dateCreatedLessThan?: any | null;
  dateUpdatedLessThan?: any | null;
  nameContain?: string | null;
  dateUpdatedGreaterThan?: any | null;
  membersIncludes?: string | null;
  dateCreatedGreaterThan?: any | null;
  statusIn?: (CommunityStatusInput | null)[] | null;
  fullText?: string | null;
  nameContains?: string | null;
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
  id?: string | null;
  version?: number | null;
  type?: ResourceTypeInput | null;
}

export interface SearchFilterInput {
  mustNotContainTag?: (string | null)[] | null;
  mustNotIncludeUserId?: (string | null)[] | null;
  dateUpdatedGreaterThan?: any | null;
  dateUpdatedLessThan?: any | null;
  dateCreatedGreaterThan?: any | null;
  type?: ResourceTypeInput | null;
  mustContainTag?: (string | null)[] | null;
  mustIncludeUserId?: (string | null)[] | null;
  types?: (ResourceTypeInput | null)[] | null;
  dateCreatedLessThan?: any | null;
}

export interface SearchParameterInput {
  scoringMode?: ScoringModeInput | null;
  highlightPreTag?: string | null;
  highlightEnable?: boolean | null;
  highlightPostTag?: string | null;
}

export interface SectionDTOInput {
  name?: string | null;
  resourcesId?: (ResourceIdentifierInput | null)[] | null;
  id?: string | null;
  description?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
