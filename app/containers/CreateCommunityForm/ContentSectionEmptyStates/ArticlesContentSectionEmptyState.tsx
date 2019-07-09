import ContentSection from '../../../components/Section/ContentSection'
import { EmptyStateContainer } from './HomeContentSectionEmptyState'
import { BodyCard } from '../../../components/Typography'

export default () => (
    <ContentSection justifyContent={['', 'column']}>
        <EmptyStateContainer>
            <BodyCard>
                All of the community's articles will be shown here!
            </BodyCard>
        </EmptyStateContainer>
    </ContentSection>
)
