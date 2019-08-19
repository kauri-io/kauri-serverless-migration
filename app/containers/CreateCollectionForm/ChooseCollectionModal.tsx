import React from 'react'
import styled from 'styled-components'
import { find, reduce, union } from 'ramda'
import { BodyCard } from '../../components/Typography'
import Button from '../../components/Button'
import ChooseCollectionCard from '../ChooseCollectionCard/View'
// import ModalHeader from '../../components/Headers/ModalHeader'
import ChooseResourceModalSearch from './ChooseResourceModalSearch'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import withApolloError from '../../lib/with-apollo-error'
import { getCollectionsForUser } from '../../queries/Collection'
import { IReduxState } from '../../lib/Module'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

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
    searchPublishedCollections,
    changeTab,
    userId,
}) => (
    <ActionsContainer>
        <ChooseResourceModalSearch
            type="collection"
            userId={userId}
            query={searchPublishedCollections}
            changeTab={changeTab}
        />
        <Button color="primary" onClick={() => handleClose()} variant="text">
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
    searchPublishedCollections: any
    searchPersonalPublishedCollections: any
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
            currentTab: 'My collections',
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
                    <ChooseCollectionCard
                        userId={this.props.userId}
                        searchPublishedCollections={
                            this.props.searchPublishedCollections
                        }
                        searchPersonalPublishedCollections={
                            this.props.searchPersonalPublishedCollections
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
                    />{' '}
                </DialogContent>

                <DialogActions>
                    <Actions
                        userId={this.props.userId}
                        searchPublishedCollections={
                            this.props.searchPublishedCollections
                        }
                        searchPersonalPublishedCollections={
                            this.props.searchPersonalPublishedCollections
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
    graphql(getCollectionsForUser, {
        name: 'searchPublishedCollections',
        options: () => ({
            variables: {
                size: collectionSize, // Because lag and no searchbar
            },
        }),
    }),
    graphql(getCollectionsForUser, {
        name: 'searchPersonalPublishedCollections',
        options: ({ userId }: { userId: string }) => ({
            variables: {
                filter: {
                    ownerIdEquals: userId,
                },
                size: collectionSize, // Because lag and no searchbar
            },
        }),
    }),
    withApolloError()
)(ChooseCollectionModal)
