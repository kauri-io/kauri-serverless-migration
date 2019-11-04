/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteBookmarkFolder
// ====================================================

export interface deleteBookmarkFolder_deleteBookmarkFolder {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface deleteBookmarkFolder {
  /**
   * Delete a bookmark folder and all the bookmarks
   */
  deleteBookmarkFolder: deleteBookmarkFolder_deleteBookmarkFolder;
}

export interface deleteBookmarkFolderVariables {
  folder: string;
}
