import React from 'react'
import {
    IOpenModalPayload,
    ICloseModalAction,
    IOpenModalAction,
} from '../../../components/Modal/Module'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { Grid, Box } from '@material-ui/core'
import { getBookmarks_getBookmarks } from '../../../queries/__generated__/getBookmarks'
import CollectionCard from '../../../components/Card/CollectionCard'
import { getCollectionURL, getArticleURL } from '../../../lib/getURLs'
import EditBookmarkFolderWidget from '../EditBookmarkFolderWidget/View'
import ArticleCard from '../../../components/Card/ArticleCard'
import Loading from '../../../components/Loading'
import { IEditBookmakFolderAction, IDeleteBookmakFolderAction } from '../Module'
import { editBookmarkFolderVariables } from '../../../queries/__generated__/editBookmarkFolder'
import { deleteBookmarkFolderVariables } from '../../../queries/__generated__/deleteBookmarkFolder'
import LinkCard from '../../../components/Card/LinkCard'

interface IProps {
    isLoggedIn: boolean
    routeChangeAction: (payload: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    editBookmarkFolderAction: (
        payload: editBookmarkFolderVariables
    ) => IEditBookmakFolderAction
    deleteBookmarkFolderAction: (
        payload: deleteBookmarkFolderVariables
    ) => IDeleteBookmakFolderAction
    folder: string
    BookmarkQuery: {
        getBookmarks: getBookmarks_getBookmarks
    }
    updateFolder: (folder: string) => void
}

export const ManageBookmarkBody = ({
    isLoggedIn,
    routeChangeAction,
    openModalAction,
    closeModalAction,
    editBookmarkFolderAction,
    deleteBookmarkFolderAction,
    BookmarkQuery,
    folder,
    updateFolder,
}: IProps) => {
    if (!BookmarkQuery.getBookmarks || !BookmarkQuery.getBookmarks.content) {
        return <Loading />
    }

    return (
        <Box p={2}>
            <EditBookmarkFolderWidget
                folder={folder}
                updateFolder={updateFolder}
                openModalAction={openModalAction}
                closeModalAction={closeModalAction}
                editBookmarkFolderAction={editBookmarkFolderAction}
                deleteBookmarkFolderAction={deleteBookmarkFolderAction}
            />

            <Grid container={true} spacing={2}>
                {BookmarkQuery.getBookmarks.content &&
                BookmarkQuery.getBookmarks.totalElements > 0 ? (
                    BookmarkQuery.getBookmarks.content.map((res: any, key) => {
                        switch (res.resource.__typename) {
                            case 'ArticleDTO': {
                                return (
                                    <Grid key={key} item={true} xs={12}>
                                        <ArticleCard
                                            {...res.resource}
                                            href={getArticleURL(res.resource)}
                                            isLoggedIn={isLoggedIn}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            openModalAction={openModalAction}
                                        />
                                    </Grid>
                                )
                            }
                            case 'CollectionDTO': {
                                return (
                                    <Grid key={key} item={true} sm={12}>
                                        {' '}
                                        <CollectionCard
                                            {...res.resource}
                                            href={getCollectionURL(
                                                res.resource
                                            )}
                                            isLoggedIn={isLoggedIn}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            openModalAction={openModalAction}
                                        />
                                    </Grid>
                                )
                            }
                            case 'ExternalLinkDTO': {
                                return (
                                    <Grid key={key} item={true} sm={12}>
                                        {' '}
                                        <LinkCard
                                            {...res.resource}
                                            href={getCollectionURL(
                                                res.resource
                                            )}
                                            isLoggedIn={isLoggedIn}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            openModalAction={openModalAction}
                                        />
                                    </Grid>
                                )
                            }

                            default: {
                                return null
                            }
                        }
                    })
                ) : (
                    <div></div>
                )}
            </Grid>
        </Box>
    )
}

export default ManageBookmarkBody
