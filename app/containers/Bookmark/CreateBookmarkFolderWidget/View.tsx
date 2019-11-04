import { FormGroup, TextField } from '@material-ui/core'
import React from 'react'
import Button from '../../../components/Button'
import { createBookmarkFolderAction } from '../Module'

interface IProps {
    createBookmarkFolderAction: typeof createBookmarkFolderAction
    updateFolderList: (newFolder: string) => void
}

interface IState {
    showCreateFolderForm: boolean
    newFolder: string
}

class CreateBookmarkFolderComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            showCreateFolderForm: false,
            newFolder: '',
        }

        this.toggleEditingCreateFolder = this.toggleEditingCreateFolder.bind(
            this
        )
        this.updateNewFolder = this.updateNewFolder.bind(this)
        this.createFolder = this.createFolder.bind(this)
    }

    toggleEditingCreateFolder() {
        this.setState({
            showCreateFolderForm: !this.state.showCreateFolderForm,
        })
    }

    updateNewFolder(value: string) {
        this.setState({ newFolder: value })
    }

    createFolder() {
        this.props.createBookmarkFolderAction({
            folder: this.state.newFolder,
        })

        this.props.updateFolderList(this.state.newFolder)
        this.setState({
            showCreateFolderForm: false,
            newFolder: '',
        })
    }

    render() {
        return (
            <FormGroup>
                {!this.state.showCreateFolderForm ? (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => this.toggleEditingCreateFolder()}
                    >
                        New Folder
                    </Button>
                ) : (
                    [
                        <TextField
                            margin="dense"
                            onChange={e => this.updateNewFolder(e.target.value)}
                            value={this.state.newFolder}
                            placeholder="Folder name"
                        />,
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => this.createFolder()}
                        >
                            Create
                        </Button>,
                    ]
                )}
            </FormGroup>
        )
    }
}

export default CreateBookmarkFolderComponent
