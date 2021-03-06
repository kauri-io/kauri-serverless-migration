import React from 'react'
import styled from 'styled-components'
import { find, filter, reduce, union } from 'ramda'
import { BodyCard } from '../../components/Typography'
import Button from '../../components/Button'
import ChooseArticleCard from '../ChooseArticleCard/View'
// import ModalHeader from '../../components/Headers/ModalHeader'
import ChooseResourceModalSearch from './ChooseResourceModalSearch'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { searchApprovedArticles } from '../../queries/Article'
import withApolloError from '../../lib/with-apollo-error'
import { IReduxState } from '../../lib/Module'
import CloseIcon from '@material-ui/icons/Close'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core'

const articleSize = 12

export interface IArticle {
    id: string
    version: string
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Title: React.FunctionComponent<{
    chosenArticles: IArticle[]
    limit: number | undefined
}> = ({ chosenArticles, limit }) => (
    <TitleContainer>
        <BodyCard>{`${
            Array.isArray(chosenArticles) ? chosenArticles.length : 0
        } Selected ${
            typeof limit === 'number' ? `: Max (${limit})` : ''
        }`}</BodyCard>
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
    chosenArticles,
    searchPublishedArticles,
    changeTab,
    userId,
}) => (
    <ActionsContainer>
        <ChooseResourceModalSearch
            type="article"
            userId={userId}
            query={searchPublishedArticles}
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
                handleConfirm(chosenArticles)
                handleClose()
            }}
        >
            Confirm
        </Button>
    </ActionsContainer>
)

interface IProps {
    limit?: number
    userId: string
    closeModalAction: () => void
    confirmModal: (articles: IArticle[]) => void
    chosenArticles: IArticle[]
    allOtherChosenArticles: Array<{ id: string; version: string }>
    searchPublishedArticles: any
    searchPersonalPublishedArticles: any
    open: boolean
    hideAllArticlesTab?: boolean
}

interface IState {
    chosenArticles: IArticle[]
    currentTab: string
    changeTab: (index: number) => void
}

class ChooseArticleModal extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            changeTab: () => {
                return
            },
            chosenArticles: this.props.chosenArticles || [],
            currentTab: 'My articles',
        }
    }

    chooseArticle = (chosenArticle: { id: string; version: string }) => {
        if (
            this.props.limit &&
            this.state.chosenArticles.length >= this.props.limit
        ) {
            if (
                find(
                    ({ id, version }) =>
                        chosenArticle.id === id &&
                        chosenArticle.version === version
                )(this.state.chosenArticles)
            ) {
                return this.setState({
                    chosenArticles: filter<IArticle>(
                        ({ id, version }) =>
                            id !== chosenArticle.id &&
                            version !== chosenArticle.version
                    )(this.state.chosenArticles),
                })
            }
            return
        }
        this.setState({
            chosenArticles: find(
                ({ id, version }) =>
                    chosenArticle.id === id && chosenArticle.version === version
            )(this.state.chosenArticles)
                ? reduce((current: any, next: IArticle) => {
                      if (
                          next.id === chosenArticle.id &&
                          next.version === chosenArticle.version
                      ) {
                          return current
                      } else {
                          current.push(next)
                          return current
                      }
                  }, [])(this.state.chosenArticles)
                : union(this.state.chosenArticles, [chosenArticle]),
        })
    }

    render() {
        const { confirmModal, closeModalAction, open } = this.props

        return (
            <Dialog
                open={open}
                fullWidth={true}
                onClose={() => closeModalAction()}
                aria-labelledby="scroll-dialog-title"
            >
                {/* {JSON.stringify(this.state)} */}
                <DialogTitle id="scroll-dialog-title">
                    <Title
                        limit={this.props.limit}
                        chosenArticles={this.state.chosenArticles}
                    />
                </DialogTitle>

                <DialogContent dividers={true}>
                    <ChooseArticleCard
                        hideAllArticlesTab={this.props.hideAllArticlesTab}
                        userId={this.props.userId}
                        searchPersonalPublishedArticles={
                            this.props.searchPersonalPublishedArticles
                        }
                        searchPublishedArticles={
                            this.props.searchPublishedArticles
                        }
                        allOtherChosenArticles={
                            this.props.allOtherChosenArticles
                        }
                        chosenArticles={this.state.chosenArticles}
                        chooseArticle={this.chooseArticle}
                        passChangeTabFunction={(changeTab: any) =>
                            this.setState({ ...this.state, changeTab })
                        }
                    />
                </DialogContent>

                <DialogActions>
                    <Actions
                        userId={this.props.userId}
                        searchPersonalPublishedArticles={
                            this.props.searchPersonalPublishedArticles
                        }
                        searchPublishedArticles={
                            this.props.searchPublishedArticles
                        }
                        chosenArticles={this.state.chosenArticles}
                        handleConfirm={(articles: IArticle[]) => {
                            confirmModal(articles)
                            closeModalAction()
                        }}
                        handleClose={() => closeModalAction()}
                        changeTab={this.state.changeTab}
                        currentTab={this.state.currentTab}
                    />{' '}
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
    graphql(searchApprovedArticles, {
        name: 'searchPublishedArticles',
        options: () => ({
            variables: {
                size: articleSize, // Because lag and no searchbar
            },
        }),
    }),
    graphql(searchApprovedArticles, {
        name: 'searchPersonalPublishedArticles',
        options: ({ userId }: { userId: string }) => ({
            variables: {
                category: userId,
                size: articleSize, // Because lag and no searchbar
            },
        }),
    }),
    withApolloError()
)(ChooseArticleModal)
