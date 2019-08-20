import { Title2 } from '../Typography'
import TopResourcesSection from '../Section/TopResourcesSection'
import Avatar from '../Avatar'
import styled from 'styled-components'

const ContributorsContainer = styled.div`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

interface IProps {
    contributors: Array<{ username: string; id: string; avatar: string }>
}

const TopContributors: React.FunctionComponent<IProps> = ({ contributors }) => (
    <TopResourcesSection>
        <Title2>Top Contributors</Title2>
        <ContributorsContainer>
            {contributors.map((contributor, index) => (
                <Avatar
                    key={index}
                    withName={true}
                    username={contributor.username}
                    id={contributor.id}
                    avatar={contributor.avatar}
                />
            ))}
        </ContributorsContainer>
    </TopResourcesSection>
)

export default TopContributors
