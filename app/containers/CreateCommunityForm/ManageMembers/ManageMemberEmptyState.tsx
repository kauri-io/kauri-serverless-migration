import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import Button from '../../../components/Button'
import styled from 'styled-components'

const ManageMemberEmptyStateContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.106912);
    border-radius: 4px;
`

const ManageMemberEmptyState: React.SFC<{
    handleClick: () => void
}> = ({ handleClick }) => (
    <ManageMemberEmptyStateContainer>
        <PublicProfileEmptyState
            iconSrc={null}
            description={
                'Moderators can add articles and collections to the community, as well as edit and remove existing ones.'
            }
            title="Moderators"
            primaryButton={
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClick}
                >
                    Invite Member
                </Button>
            }
        />
    </ManageMemberEmptyStateContainer>
)

export default ManageMemberEmptyState
