import AlertView from '../../../components/Modal/AlertView'
import { getBookmarkFolders_getBookmarkFolders } from '../../../queries/__generated__/getBookmarkFolders'
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    makeStyles,
    Theme,
    Divider,
} from '@material-ui/core'
import React from 'react'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import CreateBookmarkFolder from '../CreateBookmarkFolderWidget/View'
import { ICloseModalAction } from '../../../components/Modal/Module'
import { IBookmarkAction, IUnbookmarkAction, ICreateBookmakFolderAction, labelRootFolder, ILabelRootFolder } from '../Module'
import { createBookmarkFolderVariables } from '../../../queries/__generated__/createBookmarkFolder'
import { bookmarkVariables } from '../../../queries/__generated__/bookmark'
import { unbookmarkVariables } from '../../../queries/__generated__/unbookmark'

interface IProps {
    closeModalAction: () => ICloseModalAction
    bookmarkAction: (payload: bookmarkVariables) => IBookmarkAction
    unbookmarkAction: (payload: unbookmarkVariables) => IUnbookmarkAction
    createBookmarkFolderAction: (payload: createBookmarkFolderVariables) => ICreateBookmakFolderAction
    labelRootFolder: (payload: ILabelRootFolder) => string
    resourceId: string
    resourceType: ResourceTypeInput
    data: {
        getBookmarkFolders: (getBookmarkFolders_getBookmarkFolders | null)[]
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    divider: {
        margin: theme.spacing(2, 0),
    },
}))

export const BookmarkResourceComponent = ({
    closeModalAction,
    createBookmarkFolderAction,
    bookmarkAction,
    unbookmarkAction,
    resourceId,
    resourceType,
    data,
}: IProps) => {
    const classes = useStyles()

    const handleCheckboxChange = (event: any) => {
        if (event.target.checked) {
            // bookmark
            bookmarkAction({
                resourceId: {
                    id: resourceId,
                    type: resourceType,
                },
                folder: event.target.value,
            })
        } else {
            // unbookmark
            unbookmarkAction({
                resourceId: {
                    id: resourceId,
                    type: resourceType,
                },
                folder: event.target.value,
            })
        }
    }

    return (
        <AlertView
            closeModalAction={closeModalAction}
            closeButtonText={'CLOSE'}
            hideCloseButton={true}
            hideConfirmButton={true}
            confirmButtonAction={() => {}}
            content={
                <FormGroup>
                    {data.getBookmarkFolders.map(folder => {
                        if (!folder) return ''

                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={
                                            folder.isBookmarked
                                                ? folder.isBookmarked
                                                : false
                                        }
                                        onChange={handleCheckboxChange}
                                        value={folder.name}
                                        color="primary"
                                    />
                                }
                                label={
                                    labelRootFolder({folder: folder.name}) +
                                    ' (' +
                                    folder.total +
                                    ')'
                                }
                            />
                        )
                    })}
                    <Divider className={classes.divider} />
                    <CreateBookmarkFolder createBookmarkFolderAction={createBookmarkFolderAction}/>
                </FormGroup>
            }
            title={'Save'}
        />
    )
}

export default BookmarkResourceComponent
