import {
    ICloseModalAction,
    IOpenModalPayload,
    IOpenModalAction,
} from '../../../components/Modal/Module'
import {
    ROOT_FOLDER,
    labelRootFolder,
    IEditBookmakFolderAction,
    IDeleteBookmakFolderAction,
} from '../Module'
import {
    Grid,
    Link,
    Typography,
    TextField,
    Box,
    makeStyles,
    Theme,
} from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import DeleteBookmarkFolderWidget from '../DeleteBookmarkFolderWidget/View'
import { useState } from 'react'
import { editBookmarkFolderVariables } from '../../../queries/__generated__/editBookmarkFolder'
import { deleteBookmarkFolderVariables } from '../../../queries/__generated__/deleteBookmarkFolder'

interface IProps {
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    editBookmarkFolderAction: (
        payload: editBookmarkFolderVariables
    ) => IEditBookmakFolderAction
    deleteBookmarkFolderAction: (
        payload: deleteBookmarkFolderVariables
    ) => IDeleteBookmakFolderAction
    folder: string
    updateFolder: (folder: string) => void
}

const useStyles = makeStyles((_theme: Theme) => ({
    text: {
        marginRight: '15px',
    },
}))

export const EditBookmarkFolderWidgetComponent = ({
    openModalAction,
    closeModalAction,
    editBookmarkFolderAction,
    deleteBookmarkFolderAction,
    folder,
    updateFolder,
}: IProps) => {
    const classes = useStyles()

    const [showForm, setShowForm] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [newFolder, setNewFolder] = useState('')

    const toggleShowForm = () => {
        setNewFolder(folder)
        setShowForm(true)
    }
    const validate = (folder: string) => {
        let hasError = false
        if (!folder || folder.length === 0 || folder.length > 20) {
            hasError = true
        }
        setHasError(hasError)
        return hasError
    }

    const handleChange = (folder: string) => {
        validate(folder)
        setNewFolder(folder)
    }

    const update = () => {
        if (validate(folder)) {
            return
        }
        editBookmarkFolderAction({ folder, newFolder })

        setNewFolder('')
        setShowForm(false)
        updateFolder(newFolder)
    }

    return (
        <Box p={1}>
            <Grid container={true}>
                <Grid item xs={9}>
                    {!showForm ? (
                        <Typography variant="h6">
                            {labelRootFolder({ folder })} &nbsp;
                            {folder !== ROOT_FOLDER ? (
                                <Link
                                    href="#"
                                    onClick={toggleShowForm}
                                    color="initial"
                                >
                                    <Edit
                                        onClick={toggleShowForm}
                                        fontSize="small"
                                    />
                                </Link>
                            ) : (
                                ''
                            )}
                        </Typography>
                    ) : (
                        <TextField
                            error={hasError ? true : false}
                            margin="dense"
                            onChange={e => handleChange(e.target.value)}
                            value={newFolder}
                            placeholder="Folder name"
                        />
                    )}
                </Grid>
                <Grid item xs={3} alignItems="flex-end">
                    {folder !== ROOT_FOLDER && !showForm ? (
                        <Link
                            href="#"
                            color="primary"
                            onClick={() =>
                                openModalAction({
                                    children: (
                                        <DeleteBookmarkFolderWidget
                                            folder={folder}
                                            updateFolder={updateFolder}
                                            closeModalAction={closeModalAction}
                                            deleteBookmarkFolderAction={
                                                deleteBookmarkFolderAction
                                            }
                                        />
                                    ),
                                })
                            }
                        >
                            <Typography
                                variant="subtitle2"
                                align="right"
                                className={classes.text}
                            >
                                DELETE FOLDER
                            </Typography>
                        </Link>
                    ) : (
                        ''
                    )}

                    {folder !== ROOT_FOLDER && showForm ? (
                        <Link href="#" color="primary" onClick={update}>
                            <Typography
                                variant="subtitle2"
                                align="right"
                                className={classes.text}
                            >
                                SAVE
                            </Typography>
                        </Link>
                    ) : (
                        ''
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditBookmarkFolderWidgetComponent
