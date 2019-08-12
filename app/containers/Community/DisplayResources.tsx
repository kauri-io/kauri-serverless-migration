import ArticleCard from '../../components/Card/ArticleCard'
import CollectionCard from '../../components/Card/CollectionCard'
import {
    Community_approved_CollectionDTO,
    Community_approved_ArticleDTO,
} from '../../queries/Fragments/__generated__/Community'
import { Container, Grid, withStyles } from '@material-ui/core'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import ArticlesEmptyState from './EmptyStates/Articles'
import CollectionsEmptyState from './EmptyStates/Collections'
import { getArticleURL, getCollectionURL } from '../../lib/getURLs'

interface IProps {
    classes?: any
    type?: string
    resources?: any
    communityId: string | null
    isMember: boolean
    closeModalAction?: () => void
    openModalAction?: (payload: { children: any }) => void
    removeResourceAction?: (payload: removeResourceVariables) => void
}

const RenderEmptyState: React.FunctionComponent<{ type: string }> = ({
    type,
}) => {
    if (type === 'articles') {
        return <ArticlesEmptyState />
    }
    if (type === 'collections') {
        return <CollectionsEmptyState />
    }
    return null
}

const RenderResources = () =>
    // isMember: boolean,
    // communityId: string | null,
    // openModalAction?: (payload: { children: any }) => void,
    // closeModalAction?: () => void,
    // removeResourceAction?: (payload: removeResourceVariables) => void
    (
        article:
            | Community_approved_ArticleDTO
            | Community_approved_CollectionDTO
    ) => {
        // console.log(destination)
        const owner =
            article.owner && article.owner.__typename === 'PublicUserDTO'
                ? {
                      avatar: article.owner.avatar,
                      id: article.owner.id || 'not_found',
                      type: 'USER',
                      username: article.owner.publicUserName,
                  }
                : article.owner && article.owner.__typename === 'CommunityDTO'
                ? {
                      avatar: article.owner.avatar,
                      id: article.owner.id || 'not_found',
                      type: 'COMMUNITY',
                      username: article.owner.communityName,
                  }
                : {
                      avatar: '',
                      id: '',

                      username: '',
                  }

        let Card: React.ReactNode = null

        if (article.__typename === 'ArticleDTO') {
            Card = <ArticleCard href={getArticleURL(article)} {...article} />
        } else if (article.__typename === 'CollectionDTO') {
            Card = (
                <CollectionCard
                    {...article}
                    href={getCollectionURL(article)}
                    key={String(article.id)}
                    owner={owner}
                    // hoverChildren={() => (
                    //     <PrimaryButton
                    //         onClick={() =>
                    //             openModalAction &&
                    //             closeModalAction &&
                    //             removeResourceAction &&
                    //             openModalAction({
                    //                 children: (
                    //                     <AlertView
                    //                         closeModalAction={() =>
                    //                             closeModalAction()
                    //                         }
                    //                         confirmButtonAction={() =>
                    //                             removeResourceAction({
                    //                                 id: String(communityId),
                    //                                 resource: {
                    //                                     id: String(
                    //                                         article.resourceIdentifier &&
                    //                                             article
                    //                                                 .resourceIdentifier
                    //                                                 .id
                    //                                     ),
                    //                                     type:
                    //                                         article.resourceIdentifier &&
                    //                                         (article
                    //                                             .resourceIdentifier
                    //                                             .type as any),
                    //                                 },
                    //                             })
                    //                         }
                    //                         content={
                    //                             <div>
                    //                                 <BodyCard>
                    //                                     If this collection is
                    //                                     removed, it will no longer
                    //                                     appear in this community, or
                    //                                     on the home page. This
                    //                                     cannot be undone.
                    //                                 </BodyCard>
                    //                             </div>
                    //                         }
                    //                         title={'Are you sure?'}
                    //                     />
                    //                 ),
                    //             })
                    //         }
                    //     >
                    //         Remove Collection
                    //     </PrimaryButton>
                    // )}
                />
            )
        } else {
            return null
        }
        return (
            <Grid key={article.id} item xs={12} sm={12} lg={6}>
                {Card}
            </Grid>
        )
    }

const DisplayResources = ({
    resources,
    // communityId,
    // isMember,
    // openModalAction,
    // closeModalAction,
    // removeResourceAction,
    type,
    classes
}: IProps) => {
    if (
        Array.isArray(resources) &&
        resources.length === 0 &&
        typeof type === 'string'
    ) {
        return <RenderEmptyState type={type} />
    }
    return (
        <Container>
            <Grid className={classes.grid} container spacing={3}>
                {Array.isArray(resources) && resources.length
                    ? resources.map(
                          RenderResources()
                          // isMember,
                          // communityId,
                          // openModalAction,
                          // closeModalAction,
                          // removeResourceAction
                      )
                    : null}
            </Grid>
        </Container>
    )
}

const DisplayManagedResourcesComponent = ({
    resources,
    classes,
}: // communityId,
// isMember,
// openModalAction,
// closeModalAction,
// removeResourceAction,
IProps & { review?: boolean }) => {
    return (
        <Container>
            <Grid className={classes.grid} container spacing={3}>
                {Array.isArray(resources) && resources.length
                    ? resources.map(
                          RenderResources()
                          // isMember,
                          // communityId,
                          // openModalAction,
                          // closeModalAction,
                          // removeResourceAction
                      )
                    : null}
            </Grid>
        </Container>
    )
}

export const DisplayManagedResources = withStyles({
    grid: {
        paddingTop: '24px',
    },
})(DisplayManagedResourcesComponent)

export default withStyles({
    grid: {
        paddingTop: '24px',
    },
})(DisplayResources)
