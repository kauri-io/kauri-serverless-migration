import AlertView from '../../../components/Modal/AlertView'
import React from 'react'
import { closeModalAction } from '../../../components/Modal/Module'
import { deleteBookmarkFolderAction, ROOT_FOLDER } from '../Module'

interface IProps {
    closeModalAction: typeof closeModalAction
    deleteBookmarkFolderAction: typeof deleteBookmarkFolderAction
    folder: string
    updateFolder: (folder: string, index?: number) => void
}

export const DeleteBookmarkFolderWidgetComponent = ({
    closeModalAction,
    deleteBookmarkFolderAction,
    folder,
    updateFolder,
}: IProps) => {
    const confirm = () => {
        deleteBookmarkFolderAction({ folder })
        updateFolder(ROOT_FOLDER, 0)
        closeModalAction()
    }

    return (
        <AlertView
            closeModalAction={closeModalAction}
            confirmButtonAction={confirm}
            content={<div />}
            title={'Delete folder?'}
        />
    )
}

export default DeleteBookmarkFolderWidgetComponent
