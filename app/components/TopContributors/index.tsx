import { Title2 } from '../Typography'
import TopResourcesSection from '../Section/TopResourcesSection'
import UserAvatarComponent, {
    IProps as UserAvatarComponentProps,
} from '../UserAvatar'
import styled from 'styled-components'
import Link from 'next/link'
import { getProfileURL } from '../../lib/getURLs'

const ContributorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

interface IProps {
    contributors: UserAvatarComponentProps[]
}

const TopContributors: React.FunctionComponent<IProps> = ({ contributors }) => (
    <TopResourcesSection>
        <Title2>Top Contributors</Title2>
        <ContributorsContainer>
            {contributors.map((contributor, index) => {
                const url = getProfileURL(contributor)
                console.log(contributor)
                return (
                    <Link key={index} href={url.href} as={url.as}>
                        <a>
                            <UserAvatarComponent {...contributor} />
                        </a>
                    </Link>
                )
            })}
        </ContributorsContainer>
    </TopResourcesSection>
)

export default TopContributors
