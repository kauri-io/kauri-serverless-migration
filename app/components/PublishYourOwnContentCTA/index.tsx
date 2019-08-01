import styled from 'styled-components'
import SecondaryButtonComponent from '../Button/SecondaryButton'
import { Title2 } from '../Typography'
import theme from '../../lib/theme-config'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const Container = styled.section`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        display: none;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

interface IProps {
    content: Array<any | null> | null
    linkComponent: (
        children: React.ReactElement<any>,
        route: string
    ) => React.ReactElement<any>
    isLoggedIn: boolean
}

const PublishYourOwnContentCTA: React.FunctionComponent<IProps> = props => (
    <Container>
        <Title2>Publish your own content</Title2>
        <Buttons>
            {props.content &&
                props.content.map(
                    content =>
                        content &&
                        props.linkComponent(
                            <SecondaryButtonComponent
                                key={content.actionName}
                                color="textPrimary"
                                border={'primary'}
                                width={`${DEFAULT_CARD_WIDTH}px`}
                            >
                                {content.actionName}
                            </SecondaryButtonComponent>,
                            props.isLoggedIn
                                ? content.link
                                : `/login?r=${content.link}`
                        )
                )}
        </Buttons>
    </Container>
)

export default PublishYourOwnContentCTA
