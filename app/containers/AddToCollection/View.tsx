import AlertView from '../../components/Modal/AlertView'
import AddToCollectionModalContent from './AddToCollectionModalContent'
import { Query } from 'react-apollo'
import { path } from 'ramda'
import { ICollection } from './CollectionsContent'
import { ISection } from './SectionsContent'
import Loading from '../../components/Loading'
import { ErrorMessage } from '../../lib/with-apollo-error'
import { Label } from '../..//components/Typography'
import { getCollectionsForUser as query } from '../../queries/Collection'
import {
    getCollectionsForUser,
    getCollectionsForUserVariables,
} from '../../queries/__generated__/getCollectionsForUser'
import { useState } from 'react'
import { addArticleToCollectionAction } from './Module';

interface IChosen {
    chosenCollection: ICollection | null
    chosenSection: ISection | null
}

interface IProps {
    closeModalAction: () => void
    userId: string
    routeChangeAction: (route: string) => void
    articleId: string
    addArticleToCollectionAction: typeof addArticleToCollectionAction
    version: number
}

const Component: React.FunctionComponent<IProps> = ({
    closeModalAction,
    userId,
    routeChangeAction,
    articleId,
    version,
    addArticleToCollectionAction,
}) => {
    const [state, setState] = useState<IChosen>({
        chosenCollection: null,
        chosenSection: null,
    })

    return (
        <Query<getCollectionsForUser, getCollectionsForUserVariables>
            query={query}
            variables={{ filter: { ownerIdEquals: userId } }}
        >
            {props => {
                if (props.loading) {
                    return <Loading />
                }
                if (props.error) {
                    return (
                        <ErrorMessage
                            data={{ error: { message: props.error.message } }}
                        />
                    )
                }

                if (
                    props.data &&
                    props.data.searchCollections &&
                    Array.isArray(props.data.searchCollections.content)
                ) {
                    const collections = path<ICollection[]>([
                        'searchCollections',
                        'content',
                    ])(props.data)

                    const collectionsThatDoNotHaveTheChosenArticleId =
                        (collections &&
                            Array.isArray(collections) &&
                            collections.filter(collection => {
                                // Filter out collections that have the articleId already
                                if (
                                    collection.sections.find(
                                        section =>
                                            !!section.resources.find(
                                                article =>
                                                    article.id === articleId
                                            )
                                    )
                                ) {
                                    return null
                                } else {
                                    return collection
                                }
                            })) ||
                        []

                    const articleAlreadyInAllCollections =
                        collectionsThatDoNotHaveTheChosenArticleId &&
                        collectionsThatDoNotHaveTheChosenArticleId.length === 0

                    return Array.isArray(collections) &&
                        collections.length > 0 ? (
                        <AlertView
                            closeModalAction={closeModalAction}
                            confirmButtonText={
                                articleAlreadyInAllCollections
                                    ? 'CREATE NEW COLLECTION'
                                    : 'CONFIRM'
                            }
                            confirmButtonAction={() => {
                                if (articleAlreadyInAllCollections) {
                                    closeModalAction()
                                    routeChangeAction(
                                        `/create-collection?articleId=${articleId}&version=${version}`
                                    )
                                }

                                if (
                                    state.chosenCollection &&
                                    state.chosenSection
                                ) {
                                    const chosenSectionid =
                                        state.chosenSection.id
                                    const chosenCollectionSections = state.chosenCollection.sections.find(
                                        section =>
                                            section.id === chosenSectionid
                                    )

                                    // Always insert article at the end
                                    const position = chosenCollectionSections
                                        ? Array.isArray(
                                              chosenCollectionSections.resources
                                          )
                                            ? chosenCollectionSections.resources
                                                  .length
                                            : 0
                                        : 0

                                    addArticleToCollectionAction(
                                        {
                                            id: state.chosenCollection.id,
                                            position,
                                            resourceId: {
                                                id: articleId,
                                                type: 'ARTICLE' as any,
                                                version,
                                            },
                                            sectionId: state.chosenSection
                                                ? state.chosenSection.id
                                          : '',
                                            closeModalAction,
                                            routeChangeAction
                                            
                                        },
                                        closeModalAction
                                    )
                                }
                            }}
                            content={
                                <AddToCollectionModalContent
                                    changeToPrefilledArticleCreateCollectionRoute={() => {
                                        closeModalAction()
                                        routeChangeAction(
                                            `/create-collection?articleId=${articleId}&version=${version}`
                                        )
                                    }}
                                    articleAlreadyInAllCollections={
                                        !!articleAlreadyInAllCollections
                                    }
                                    collectionsThatDoNotHaveTheChosenArticleId={
                                        collectionsThatDoNotHaveTheChosenArticleId
                                    }
                                    parentState={state}
                                    setCollection={({ chosenCollection }) =>
                                        setState({
                                            chosenCollection,
                                            chosenSection: null,
                                        })
                                    }
                                    setSection={({ chosenSection }) =>
                                        setState({ ...state, chosenSection })
                                    }
                                />
                            }
                            title={'Add to Collection'}
                        />
                    ) : (
                        <AlertView
                            title={'Create new collection'}
                            closeModalAction={closeModalAction}
                            confirmButtonAction={() => {
                                closeModalAction()
                                routeChangeAction(
                                    `/create-collection?articleId=${articleId}&version=${version}`
                                )
                            }}
                            confirmButtonText={'Create new collection'}
                            content={
                                <section>
                                    <Label>
                                        You don't have any collections.
                                    </Label>
                                </section>
                            }
                        />
                    )
                }
            }}
        </Query>
    )
}

export default Component
