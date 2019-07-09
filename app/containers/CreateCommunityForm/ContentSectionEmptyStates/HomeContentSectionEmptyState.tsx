import ContentSection from '../../../components/Section/ContentSection'
import styled from 'styled-components'
import { BodyCard } from '../../../components/Typography'

export const EmptyStateContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HomeContentSectionEmptyState: React.FunctionComponent = () => (
    <ContentSection justifyContent={['', 'column']}>
        <EmptyStateContainer>
            <BodyCard>
                All of the community's articles and collections will be shown
                here!
            </BodyCard>
        </EmptyStateContainer>
    </ContentSection>
)

export default HomeContentSectionEmptyState
