/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, CommunityInvitationStatusInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityInvitations
// ====================================================

export interface getCommunityInvitations_getCommunityInvitations_content {
  __typename: "CommunityInvitationDTO";
  /**
   * Invitation Unique ID
   */
  invitationId: string;
  /**
   * Community ID
   */
  communityId: string;
  /**
   * Invitation date sent
   */
  dateCreated: any;
  /**
   * Invitation date expiration
   */
  dateExpiration: any;
  /**
   * Invitation date closed (when the invitation is accepted/rejected/expired)
   */
  dateClosed: any | null;
  /**
   * Invitation status
   */
  status: CommunityInvitationStatusInput;
  /**
   * Invitation email
   */
  recipientEmail: string;
  /**
   * Invitation role
   */
  recipientRole: CommunityPermissionInput;
}

export interface getCommunityInvitations_getCommunityInvitations {
  __typename: "ResponsePage_CommunityInvitationDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Returns the page content.
   */
  content: (getCommunityInvitations_getCommunityInvitations_content | null)[];
}

export interface getCommunityInvitations {
  /**
   * Get community invitations list with filter, sorting and pagination.
   * This operation can only be performed by a community ADMIN.
   */
  getCommunityInvitations: getCommunityInvitations_getCommunityInvitations | null;
}

export interface getCommunityInvitationsVariables {
  id: string;
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
}
