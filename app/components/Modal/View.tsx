import { Dialog } from '@material-ui/core'

interface IProps {
    children: React.ReactElement<any>
    isModalOpen: boolean
    closeModalAction: () => void
}

const handleCloseModal = (action: () => void) => () => action()

const ModalComponent: React.FunctionComponent<IProps> = ({
    isModalOpen,
    closeModalAction,
    children,
}) =>
    isModalOpen ? (
        <Dialog
            open={isModalOpen}
            onClose={handleCloseModal(closeModalAction)}
            fullWidth={true}
            maxWidth="xs"
        >
            {children}
        </Dialog>
    ) : null

export default ModalComponent
