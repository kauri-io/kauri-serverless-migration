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
    Button,
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
    rightWrapper: {
        alignItems: "flex-end"
    },
    button: {
        float: 'right',
        marginRight: '15px'
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

    const reset = () => {
        setNewFolder('')
        setHasError(false)
        setShowForm(false)
    }

    const update = () => {
        if (validate(folder)) {
            return
        }
        editBookmarkFolderAction({ folder, newFolder })
        updateFolder(newFolder)
        reset()
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
                <Grid item xs={3} className={classes.rightWrapper}>
                    {folder !== ROOT_FOLDER && !showForm ? (
                        <Button
                        color="primary"
                        variant="text"
                        className={classes.button}
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
                        Delete Folder
                        </Button>
                    ) : (
                        ''
                    )}

                    {folder !== ROOT_FOLDER && showForm ? (
                        <div>
                            <Button
                            color="primary"
                            variant="outlined"
                            className={classes.button}
                            onClick={update}
                            >
                            Save
                            </Button>
                            <Button
                            color="primary"
                            variant="text"
                            className={classes.button}
                            onClick={reset}
                            >
                            Cancel
                            </Button>
                        </div>
                    ) : (
                        ''
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditBookmarkFolderWidgetComponent
