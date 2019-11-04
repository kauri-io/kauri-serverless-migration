/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: extractLinkMetadata
// ====================================================

export interface extractLinkMetadata_extractLinkMetadata {
  __typename: "LinkMetadataDTO";
  url: string | null;
  type: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  author: string | null;
  authorSocial: any | null;
}

export interface extractLinkMetadata {
  /**
   * Extract a url's metadata
   * This operation can be performed anonymously
   */
  extractLinkMetadata: extractLinkMetadata_extractLinkMetadata;
}

export interface extractLinkMetadataVariables {
  url: string;
}
