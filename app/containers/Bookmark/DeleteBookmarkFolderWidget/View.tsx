import AlertView from '../../../components/Modal/AlertView'
import React from 'react'
import { ICloseModalAction } from '../../../components/Modal/Module'
import { ROOT_FOLDER, IDeleteBookmakFolderAction } from '../Module'
import { deleteBookmarkFolderVariables } from '../../../queries/__generated__/deleteBookmarkFolder'

interface IProps {
    closeModalAction: () => ICloseModalAction
    deleteBookmarkFolderAction: (
        payload: deleteBookmarkFolderVariables
    ) => IDeleteBookmakFolderAction
    folder: string
    updateFolder: (folder: string) => void
}

export const DeleteBookmarkFolderWidgetComponent = ({
    closeModalAction,
    deleteBookmarkFolderAction,
    folder,
    updateFolder,
}: IProps) => {
    const confirm = () => {
        deleteBookmarkFolderAction({ folder })
        updateFolder(ROOT_FOLDER)
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
