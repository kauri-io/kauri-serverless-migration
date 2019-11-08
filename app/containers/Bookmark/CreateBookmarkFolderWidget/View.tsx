import { FormGroup, TextField, Link } from '@material-ui/core'
import { useState} from 'react'
import { ICreateBookmakFolderAction } from '../Module'
import { createBookmarkFolderVariables } from '../../../queries/__generated__/createBookmarkFolder'

interface IProps {
    createBookmarkFolderAction: (payload: createBookmarkFolderVariables) => ICreateBookmakFolderAction
}

export const CreateBookmarkFolderComponent = ({
    createBookmarkFolderAction,
}: IProps) => {
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

        setFolder('')
        setShowForm(false)
    }

    return (
        <FormGroup>
            {!showForm ? (
                <Link
                    color="primary"
                    variant="subtitle2"
                    href="#"
                    onClick={toggleShowForm}
                >
                    {' '}
                    NEW FOLDER
                </Link>
            ) : (
                [
                    <TextField
                        error={hasError ? true : false}
                        margin="dense"
                        onChange={e => updateFolder(e.target.value)}
                        value={folder}
                        placeholder="Folder name"
                    />,
                    <Link
                        color="primary"
                        variant="subtitle2"
                        href="#"
                        onClick={createFolder}
                    >
                        {' '}
                        CREATE
                    </Link>,
                ]
            )}
        </FormGroup>
    )
}

export default CreateBookmarkFolderComponent
