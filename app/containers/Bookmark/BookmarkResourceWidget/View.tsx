import AlertView from '../../../components/Modal/AlertView'
import { getBookmarkFolders_getBookmarkFolders } from '../../../queries/__generated__/getBookmarkFolders'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import CreateBookmarkFolder from '../CreateBookmarkFolderWidget'
import { closeModalAction } from '../../../components/Modal/Module'
import { bookmarkAction, unbookmarkAction } from '../Module'

interface IProps {
    closeModalAction: typeof closeModalAction
    bookmarkAction: typeof bookmarkAction
    unbookmarkAction: typeof unbookmarkAction
    resourceId: string
    resourceType: ResourceTypeInput
    data: {
        getBookmarkFolders: (getBookmarkFolders_getBookmarkFolders | null)[]
    }
}

interface IState {
    folders: getBookmarkFolders_getBookmarkFolders[]
}

class BookmarkResourceComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)

        this.state = {
            folders: props.data.getBookmarkFolders
                .map(item => {
                    if (item != null) return item
                })
                .reduce((obj, item) => {
                    obj[item.name] = item
                    return obj
                }, {}),
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.updateFolderList = this.updateFolderList.bind(this)
    }

    handleCheckboxChange(event: any) {
        if (event.target.checked) {
            // bookmark
            this.props.bookmarkAction({
                resourceId: {
                    id: this.props.resourceId,
                    type: this.props.resourceType,
                },
                folder: event.target.value,
            })
            this.state.folders[event.target.value].total++
        } else {
            // unbookmark
            this.props.unbookmarkAction({
                resourceId: {
                    id: this.props.resourceId,
                    type: this.props.resourceType,
                },
                folder: event.target.value,
            })
            this.state.folders[event.target.value].total--
        }

        this.state.folders[event.target.value].isBookmarked =
            event.target.checked
        this.setState(this.state)
    }

    updateFolderList(newFolder: string) {
        this.state.folders[newFolder] = {
            name: newFolder,
            total: 0,
            isBookmarked: false,
        }
        this.setState(this.state)
    }

    labelRootFolder(folder: String) {
        if (folder == '_root_') {
            // default name for root folder
            return 'Bookmark'
        }
        return folder
    }

    render() {
        return (
            <AlertView
                closeModalAction={this.props.closeModalAction}
                closeButtonText={'CLOSE'}
                hideConfirmButton={true}
                confirmButtonAction={() => {}}
                content={
                    <FormGroup>
                        {Object.values(this.state.folders).map(folder => {
                            return (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={
                                                folder.isBookmarked
                                                    ? folder.isBookmarked
                                                    : false
                                            }
                                            onChange={this.handleCheckboxChange}
                                            value={folder.name}
                                            color="primary"
                                        />
                                    }
                                    label={
                                        this.labelRootFolder(folder.name) +
                                        ' (' +
                                        folder.total +
                                        ')'
                                    }
                                />
                            )
                        })}

                        <CreateBookmarkFolder
                            updateFolderList={this.updateFolderList}
                        />
                    </FormGroup>
                }
                title={'Bookmarks'}
            />
        )
    }
}

export default BookmarkResourceComponent
