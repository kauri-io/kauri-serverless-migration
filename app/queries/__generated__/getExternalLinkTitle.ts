/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getExternalLinkTitle
// ====================================================

export interface getExternalLinkTitle_getExternalLink_title {
  __typename: "ExternalLinkField_String";
  /**
   * The field value
   */
  value: string | null;
}

export interface getExternalLinkTitle_getExternalLink {
  __typename: "ExternalLinkDTO";
  /**
   * The link title
   */
  title: getExternalLinkTitle_getExternalLink_title;
}

export interface getExternalLinkTitle {
  /**
   * Get an external link by ID
   * This operation can be performed anonymously
   */
  getExternalLink: getExternalLinkTitle_getExternalLink;
}

export interface getExternalLinkTitleVariables {
  id: string;
}
