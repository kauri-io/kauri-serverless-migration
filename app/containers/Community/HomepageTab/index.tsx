import styled from 'styled-components'
import { getCommunity_getCommunity_homepage } from '../../../queries/__generated__/getCommunity'
import CommunityHomepageEmptyState from '../EmptyStates/Homepage'
import { routeChangeAction as routeChange } from '../../../lib/Epics/RouteChangeEpic'
import CollectionSection from '../../Collection/CollectionSection'
import { openModalAction } from '../../../components/Modal/Module'

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 ${props => props.theme.padding};
`

const CommunityHomepageContent: React.FunctionComponent<
    Pick<
        IProps,
        | 'homepage'
        | 'isCommunityAdmin'
        | 'isLoggedIn'
        | 'userId'
        | 'openModalAction'
        | 'routeChangeAction'
    >
> = ({
    homepage,
    isCommunityAdmin,
    isLoggedIn,
    userId,
    openModalAction,
    routeChangeAction,
}) => (
    <ContentContainer>
        {homepage &&
            homepage.map(
                section =>
                    section && (
                        <CollectionSection
                            key={String(section.name)}
                            name={String(section.name)}
                            isLoggedIn={isLoggedIn}
                            currentUser={userId}
                            description={section.description || ''}
                            resources={section.resources as any}
                            openModalAction={openModalAction}
                            routeChangeAction={routeChangeAction}
                            isOwnedByCurrentUser={isCommunityAdmin}
                        />
                    )
            )}
    </ContentContainer>
)

interface IProps {
    isCommunityAdmin: boolean
    homepage: Array<getCommunity_getCommunity_homepage | null> | null
    id: string
    userId: string
    routeChangeAction: typeof routeChange
    isLoggedIn: boolean
    openModalAction: typeof openModalAction
}

const HomepageResources: React.FunctionComponent<IProps> = ({
    homepage,
    id,
    isCommunityAdmin,
    routeChangeAction,
    isLoggedIn,
    userId,
    openModalAction,
}) => {
    if (Array.isArray(homepage) && homepage.length) {
        return (
            <CommunityHomepageContent
                isCommunityAdmin={isCommunityAdmin}
                openModalAction={openModalAction}
                userId={userId}
                isLoggedIn={isLoggedIn}
                homepage={homepage}
                routeChangeAction={routeChangeAction}
            />
        )
    } else if (
        ((Array.isArray(homepage) && !homepage.length) || !homepage) &&
        isCommunityAdmin
    ) {
        return (
            <CommunityHomepageEmptyState
                routeChangeAction={routeChangeAction}
                id={id}
            />
        )
    }
    return null
}

export default HomepageResources
