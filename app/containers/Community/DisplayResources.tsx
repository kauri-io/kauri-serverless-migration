import ArticleCard from '../../components/Card/ArticleCard'
import CollectionCard from '../../components/Card/CollectionCard'
import {
    Community_approved_CollectionDTO,
    Community_approved_ArticleDTO,
    Community_approved_ExternalLinkDTO,
} from '../../queries/Fragments/__generated__/Community'
import { Container, Grid, withStyles } from '@material-ui/core'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import ArticlesEmptyState from './EmptyStates/Articles'
import CollectionsEmptyState from './EmptyStates/Collections'
import { getArticleURL, getCollectionURL, getLinkUrl } from '../../lib/getURLs'
import { closeModalAction } from '../../components/Modal/Module'
import LinkCard from '../../components/Card/LinkCard'

interface IProps {
    classes?: any
    type?: string
    resources?: any
    communityId: string | null
    isMember: boolean
    closeModalAction?: typeof closeModalAction
    removeResourceAction?: (payload: removeResourceVariables) => void
}

const RenderEmptyState: React.FunctionComponent<{ type: string }> = ({
    type,
}) => {
    if (type === 'articlesAndLinks') {
        return <ArticlesEmptyState />
    }
    if (type === 'collections') {
        return <CollectionsEmptyState />
    }
    return null
}

const RenderResources = () => (
    resource:
        | Community_approved_ArticleDTO
        | Community_approved_CollectionDTO
        | Community_approved_ExternalLinkDTO
) => {
    const owner =
        resource.owner && resource.owner.__typename === 'PublicUserDTO'
            ? {
                  avatar: resource.owner.avatar,
                  id: resource.owner.id || 'not_found',
                  type: 'USER',
                  username: resource.owner.publicUserName,
              }
            : resource.owner && resource.owner.__typename === 'CommunityDTO'
            ? {
                  avatar: resource.owner.avatar,
                  id: resource.owner.id || 'not_found',
                  type: 'COMMUNITY',
                  username: resource.owner.communityName,
              }
            : {
                  avatar: '',
                  id: '',

                  username: '',
              }

    let Card: React.ReactNode = null

    if (resource.__typename === 'ArticleDTO') {
        Card = <ArticleCard href={getArticleURL(resource)} {...resource} />
    } else if (resource.__typename === 'ExternalLinkDTO') {
        Card = <LinkCard href={getLinkUrl(resource)} {...resource} />
    } else if (resource.__typename === 'CollectionDTO') {
        Card = (
            <CollectionCard
                {...resource}
                href={getCollectionURL(resource)}
                key={String(resource.id)}
                owner={owner}
            />
        )
    } else {
        return null
    }
    return (
        <Grid key={resource.id} item xs={12} sm={12} lg={12}>
            {Card}
        </Grid>
    )
}

const DisplayResources = ({ resources, type, classes }: IProps) => {
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
}: IProps & { review?: boolean }) => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
            </div>
        </Container>
    )
}

export const DisplayManagedResources = withStyles({
    grid: {
        paddingTop: '24px',
        paddingBottom: '24px',
        width: 870,
        margin: 'auto',
    },
})(DisplayManagedResourcesComponent)

export default withStyles({
    grid: {
        paddingTop: '24px',
        paddingBottom: '24px',
        width: 870,
        margin: 'auto',
    },
})(DisplayResources)
