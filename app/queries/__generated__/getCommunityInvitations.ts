/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, CommunityInvitationStatusInput, CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityInvitations
// ====================================================

export interface getCommunityInvitations_getCommunityInvitations_content {
  __typename: "CommunityInvitationDTO";
  invitationId: string ;
  communityId: string ;
  dateCreated: any ;
  dateExpiration: any ;
  dateClosed: any ;
  status: CommunityInvitationStatusInput ;
  recipientEmail: string ;
  recipientRole: CommunityPermissionInput ;
}

export interface getCommunityInvitations_getCommunityInvitations {
  __typename: "ResponsePage_CommunityInvitationDTO";
  totalElements: any;
  totalPages: number;
  content: (getCommunityInvitations_getCommunityInvitations_content )[] ;
}

export interface getCommunityInvitations {
  getCommunityInvitations: getCommunityInvitations_getCommunityInvitations ;
}

export interface getCommunityInvitationsVariables {
  id?: string ;
  page?: number ;
  size?: number ;
  sort?: string ;
  dir?: DirectionInput ;
}
