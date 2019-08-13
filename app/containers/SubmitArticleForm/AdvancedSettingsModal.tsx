import React from 'react'
import styled from 'styled-components'
import { NavigationText, Label } from '../../components/Typography'
import Button from '@material-ui/core/Button'
import ModalHeader from '../../components/Headers/ModalHeader'
import TextField from '@material-ui/core/TextField'
import {
    IShowNotificationAction,
    IShowNotificationPayload,
} from '../../lib/Epics/ShowNotificationEpic'
import CloseIcon from '@material-ui/icons/Close'

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`
const Title = () => (
    <TitleContainer>
        <NavigationText>Advanced Settings</NavigationText>
    </TitleContainer>
)

const ActionsContainer = styled.div`
    display: flex;
    align-self: flex-end;

    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Actions = ({
    handleClose,
    handleConfirm,
}: {
    handleClose: any
    handleConfirm: any
}) => (
    <ActionsContainer>
        <Button color="primary" onClick={() => handleClose()} variant="text">
            <CloseIcon />
            Close
        </Button>
        <Button
            color="primary"
            variant="contained"
            onClick={() => {
                handleClose()
                handleConfirm()
            }}
        >
            Confirm
        </Button>
    </ActionsContainer>
)

const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 600px;
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
`

interface IProps {
    closeModalAction: () => void
    confirmModal: (canonicalURL: string) => void
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
}

interface IState {
    canonicalURL: string
}

class AdvancedSettingsModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            canonicalURL: '',
        }
    }

    render() {
        const { closeModalAction, confirmModal } = this.props
        return (
            <ContentContainer>
                <ModalHeader title={<Title />} />
                <Label>
                    A canonical URL helps search engines give credit to the
                    origin.
                </Label>
                <TextField
                    onChange={e =>
                        this.setState({ canonicalURL: e.target.value })
                    }
                    value={this.state.canonicalURL}
                    placeholder="Enter a canonical url"
                />
                <Actions
                    handleConfirm={
                        this.state.canonicalURL.length > 0
                            ? () => confirmModal(this.state.canonicalURL)
                            : () =>
                                  this.props.showNotificationAction({
                                      description:
                                          'Please enter a canonical url',
                                      message:
                                          'A canonical URL helps search engines give credit to the origin.',
                                      notificationType: 'error',
                                  })
                    }
                    handleClose={() => closeModalAction()}
                />
            </ContentContainer>
        )
    }
}

export default AdvancedSettingsModal
