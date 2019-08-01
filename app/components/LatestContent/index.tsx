import styled from 'styled-components'
import { Title2 } from '../Typography'
import { RenderCardContent } from '../CuratedLists'
import SecondaryButtonComponent from '../Button/SecondaryButton'
import theme from '../../lib/theme-config'

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
    Link: any
    linkComponent: (
        children: React.ReactElement<any>,
        route: string
    ) => React.ReactElement<any>
}

const LatestContent: React.FunctionComponent<IProps> = props => {
    return (
        <LatestContentSection>
            <Title2>Latest Content</Title2>
            <LatestContentCardContainer>
                {props.content.map(RenderCardContent())}
            </LatestContentCardContainer>
            <AllContentButtonsContainer>
                {props.linkComponent(
                    <SecondaryButtonComponent
                        color="textPrimary"
                        width={'140px'}
                        border={'primary'}
                    >
                        All Articles
                    </SecondaryButtonComponent>,
                    `/articles`
                )}
                {props.linkComponent(
                    <SecondaryButtonComponent
                        color="textPrimary"
                        width={'140px'}
                        border={'primary'}
                    >
                        All Collections
                    </SecondaryButtonComponent>,
                    `/collections`
                )}
            </AllContentButtonsContainer>
        </LatestContentSection>
    )
}

export default LatestContent
