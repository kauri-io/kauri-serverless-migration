import {
    FormGroup,
    TextField,
    makeStyles,
    Theme,
    Button,
} from '@material-ui/core'
import { useState } from 'react'
import { ICreateBookmakFolderAction } from '../Module'
import { createBookmarkFolderVariables } from '../../../queries/__generated__/createBookmarkFolder'

interface IProps {
    createBookmarkFolderAction: (
        payload: createBookmarkFolderVariables
    ) => ICreateBookmakFolderAction
}

const useStyles = makeStyles((_theme: Theme) => ({
    form: {
        padding: '0 12px',
    },
    wrapper: {
        display: 'flex',
    },
    link: {
        width: 100,
    },
}))

export const CreateBookmarkFolderComponent = ({
    createBookmarkFolderAction,
}: IProps) => {
    const classes = useStyles()

    const [showForm, setShowForm] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [folder, setFolder] = useState('')

    const toggleShowForm = () => {
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

    const updateFolder = (folder: string) => {
        validate(folder)
        setFolder(folder)
    }

    const createFolder = () => {
        if (validate(folder)) {
            return
        }
        createBookmarkFolderAction({ folder })
        reset()
    }

    const reset = () => {
        setFolder('')
        setHasError(false)
        setShowForm(false)
    }

    return (
        <FormGroup>
            {!showForm ? (
                <Button color="primary" variant="text" onClick={toggleShowForm}>
                    New folder
                </Button>
            ) : (
                [
                    <div className={classes.form}>
                        <TextField
                            error={hasError ? true : false}
                            margin="dense"
                            helperText={hasError ? 'Incorrect folder' : ''}
                            onChange={e => updateFolder(e.target.value)}
                            value={folder}
                            placeholder="Folder name"
                        />
                        <div className={classes.wrapper}>
                            <Button
                                color="primary"
                                variant="text"
                                onClick={reset}
                                className={classes.link}
                            >
                                Cancel
                            </Button>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={createFolder}
                                className={classes.link}
                            >
                                Create
                            </Button>
                        </div>
                    </div>,
                ]
            )}
        </FormGroup>
    )
}

export default CreateBookmarkFolderComponent
