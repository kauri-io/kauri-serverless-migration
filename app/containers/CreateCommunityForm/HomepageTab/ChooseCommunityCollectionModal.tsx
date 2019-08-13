import React from 'react'
import styled from 'styled-components'
import { find, reduce, union } from 'ramda'
import { BodyCard } from '../../../components/Typography'
import Button from '@material-ui/core/Button'
import ChooseCommunityCollectionCard from '../../ChooseCommunityCollectionCard/View'
// import ModalHeader from '../../../components/Headers/ModalHeader'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import withApolloError from '../../../lib/with-apollo-error'
import { IReduxState } from '../../../lib/Module'
import { getCommunityContentQuery } from '../../../queries/Community'
import CloseIcon from '@material-ui/icons/Close'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core'

const collectionSize = 12

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Title = ({ chosenCollections }: any) => (
    <TitleContainer>
        <BodyCard>{`${
            Array.isArray(chosenCollections) ? chosenCollections.length : 0
        } Selected`}</BodyCard>
    </TitleContainer>
)

const ActionsContainer = styled.div`
    display: flex;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Actions: React.FunctionComponent<any> = ({
    handleClose,
    handleConfirm,
    chosenCollections,
}) => (
    <ActionsContainer>
        <Button color="primary" variant="text" onClick={() => handleClose()}>
            <CloseIcon />
            Close
        </Button>
        <Button
            color="primary"
            variant="contained"
            onClick={() => {
                handleConfirm(chosenCollections)
                handleClose()
            }}
        >
            Confirm
        </Button>
    </ActionsContainer>
)

interface IProps {
    open: boolean
    userId: string
    closeModalAction: () => void
    confirmModal: (collections: Array<{ id: string }>) => void
    chosenCollections: Array<{ id: string }>
    allOtherChosenCollections: Array<{ id: string }>
    currentCollectionIdIfUpdating?: string
    searchCommunityPublishedCollections: any
}

interface IState {
    chosenCollections: Array<{ id: string }>
    currentTab: string
    changeTab: (index: number) => void
}

export interface ICollection {
    id: string
}

class ChooseCollectionModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            changeTab: () => {
                return
            },
            chosenCollections: this.props.chosenCollections || [],
            currentTab: 'Community collections',
        }
    }

    chooseCollection = (chosenCollection: { id: string; version: string }) =>
        this.setState({
            chosenCollections: find(({ id }) => chosenCollection.id === id)(
                this.state.chosenCollections
            )
                ? reduce((current: any, next: { id: string }) => {
                      if (next.id === chosenCollection.id) {
                          return current
                      } else {
                          current.push(next)
                          return current
                      }
                  }, [])(this.state.chosenCollections)
                : union(this.state.chosenCollections, [chosenCollection]),
        })

    render() {
        const {
            closeModalAction,
            confirmModal,
            currentCollectionIdIfUpdating,
            open,
        } = this.props

        return (
            <Dialog
                open={open}
                fullWidth={true}
                onClose={() => closeModalAction()}
                aria-labelledby="scroll-dialog-title"
            >
                {/* {JSON.stringify(this.state)} */}
                <DialogTitle id="scroll-dialog-title">
                    <Title chosenCollections={this.state.chosenCollections} />
                </DialogTitle>

                <DialogContent dividers={true}>
                    <ChooseCommunityCollectionCard
                        userId={this.props.userId}
                        searchCommunityPublishedCollections={
                            this.props.searchCommunityPublishedCollections
                        }
                        currentCollectionIdIfUpdating={
                            currentCollectionIdIfUpdating
                        }
                        allOtherChosenCollections={
                            this.props.allOtherChosenCollections
                        }
                        chosenCollections={this.state.chosenCollections}
                        chooseCollection={this.chooseCollection}
                        passChangeTabFunction={(changeTab: any) =>
                            this.setState({ ...this.state, changeTab })
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Actions
                        userId={this.props.userId}
                        searchCommunityPublishedCollections={
                            this.props.searchCommunityPublishedCollections
                        }
                        chosenCollections={this.state.chosenCollections}
                        handleConfirm={confirmModal}
                        handleClose={() => closeModalAction()}
                        currentTab={this.state.currentTab}
                        changeTab={this.state.changeTab}
                    />
                </DialogActions>
            </Dialog>
        )
    }
}

const mapStateToProps = (state: IReduxState) => ({
    userId: state.app && state.app.user && state.app.user.id,
})

export default compose(
    connect(
        mapStateToProps,
        {}
    ),
    graphql(getCommunityContentQuery, {
        name: 'searchCommunityPublishedCollections',
        options: ({ id }: { id: string }) => ({
            variables: {
                filter: {
                    resourceTypeEquals: 'COLLECTION',
                    statusEquals: 'APPROVED',
                },
                id,
                size: collectionSize, // Because lag and no searchbar
            },
        }),
    }),
    withApolloError()
)(ChooseCollectionModal)
