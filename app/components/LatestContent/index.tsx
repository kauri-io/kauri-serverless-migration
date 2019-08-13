import styled from 'styled-components'
import { Title2 } from '../Typography'
import { RenderCardContent } from '../CuratedLists'
import Button from '@material-ui/core/Button'
import theme from '../../lib/theme-config'
import Link from 'next/link'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const LatestContentSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    ${props => props.theme.padContent};
    > :first-child {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        padding: 0px ${props => props.theme.space[2]}px;
    }
`

const LatestContentCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${DEFAULT_CARD_WIDTH}px, ${DEFAULT_CARD_WIDTH}px)
    );
    grid-gap: ${props => props.theme.space[2]}px
        ${props => props.theme.space[3]}px;
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        justify-content: center;
    }
`

const AllContentButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[3]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        > :not(:last-child) {
            margin-right: ${props => props.theme.space[0]}px;
            margin-bottom: ${props => props.theme.space[2]}px;
        }
        flex-direction: column;
    }
`

interface IProps {
    content: any
}

const LatestContent: React.FunctionComponent<IProps> = props => {
    return (
        <LatestContentSection>
            <Title2>Latest Content</Title2>
            <LatestContentCardContainer>
                {props.content.map(RenderCardContent())}
            </LatestContentCardContainer>
            <AllContentButtonsContainer>
                <Link href="/articles" as="/articles">
                    <a>
                        <Button color="primary" variant="outlined">
                            All Articles
                        </Button>
                    </a>
                </Link>

                <Link href="/collections" as="/collections">
                    <a>
                        <Button color="primary" variant="outlined">
                            All Collections
                        </Button>
                    </a>
                </Link>
            </AllContentButtonsContainer>
        </LatestContentSection>
    )
}

export default LatestContent
