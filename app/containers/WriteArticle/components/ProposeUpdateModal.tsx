import React from 'react'
import styled from 'styled-components'
import { NavigationText, BodyCard } from '../../../components/Typography'
import Button from '../../../components/Button'
import ModalHeader from '../../../components/Headers/ModalHeader'
import TextField from '@material-ui/core/TextField'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'
import CloseIcon from '@material-ui/icons/Close'

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`
const Title = ({ text }: { text: string }) => (
    <TitleContainer>
        <NavigationText>Submit Update</NavigationText>
        <BodyCard>{text}</BodyCard>
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
    height: 400px;
    width: 600px;
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
`

interface IProps {
    closeModalAction: () => void
    confirmModal: (submissionType: string, updateComment: string) => void
    showNotificationAction: typeof showNotificationAction
}

interface IState {
    updateComment: string
}

class ProposeArticleModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            updateComment: '',
        }
    }

    render() {
        const { closeModalAction, confirmModal } = this.props
        return (
            <ContentContainer>
                <ModalHeader
                    title={
                        <Title text="Please enter a note to the author explaining your changes. At a minimum, describe what you've changed. Adding detail will greatly increase the likelihood the author will accept and publish your proposed update!" />
                    }
                />
                <TextField
                    onChange={e =>
                        this.setState({ updateComment: e.target.value })
                    }
                    value={this.state.updateComment}
                    placeholder="Please describe your changes"
                />
                <Actions
                    handleConfirm={
                        this.state.updateComment.length > 0
                            ? confirmModal(
                                  'submit/update',
                                  this.state.updateComment
                              )
                            : () =>
                                  this.props.showNotificationAction({
                                      description: 'Please add a comment!',
                                      message:
                                          'An update comment for the owner of the article is required.',
                                      notificationType: 'error',
                                  })
                    }
                    handleClose={() => closeModalAction()}
                />
            </ContentContainer>
        )
    }
}

export default ProposeArticleModal