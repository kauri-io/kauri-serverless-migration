/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getBookmarkFolders
// ====================================================

export interface getBookmarkFolders_getBookmarkFolders {
  __typename: "BookmarkFolderDTO";
  /**
   * Folder name
   */
  name: string;
  /**
   * Number of bookmarks within the folder
   */
  total: any;
  /**
   * Flag populated if getFolders(resourceId) to return if a resource is bookmarked or not into a folder
   */
  isBookmarked: boolean | null;
}

export interface getBookmarkFolders {
  /**
   * Get user's bookmark folders
   * This operation can only be performed by a logged user
   */
  getBookmarkFolders: (getBookmarkFolders_getBookmarkFolders | null)[];
}

export interface getBookmarkFoldersVariables {
  resourceId?: ResourceIdentifierInput | null;
}
