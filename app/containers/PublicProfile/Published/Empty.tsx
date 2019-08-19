import Button from '../../../components/Button'
import MediumImportButton from '../../../components/Button/MediumImportButton'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import { BodyCard } from '../../../components/Typography'
import styled from 'styled-components'
import Link from 'next/link'

const Centered = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.paddingTop};
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export default ({ isLoggedIn, isOwner }) => (
    <Centered>
        <PublicProfileEmptyState
            iconSrc={'/static/images/icons/no-published-articles.svg'}
            description={
                isLoggedIn ? (
                    <DescriptionContainer>
                        <BodyCard>
                            Any articles you've published on Kauri will appear
                            here.
                        </BodyCard>
                        <BodyCard>
                            Get started by creating a new draft below, or
                            importing one you've written on Medium!
                        </BodyCard>
                        <BodyCard>
                            Your draft articles will be shown in the next tab
                            until you publish them.
                        </BodyCard>
                    </DescriptionContainer>
                ) : (
                    "The user hasn't published any articles yet. Once they do, they will appear here!"
                )
            }
            title="No Articles Published"
            secondaryButton={
                isOwner ? <MediumImportButton border /> : <div></div>
            }
            primaryButton={
                isOwner ? (
                    <Link href="/write-article">
                        <a>
                            <Button color="primary" variant="contained">
                                Create Article
                            </Button>
                        </a>
                    </Link>
                ) : (
                    <div></div>
                )
            }
        />
    </Centered>
)
