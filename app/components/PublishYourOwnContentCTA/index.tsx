import styled from 'styled-components'
import SecondaryButtonComponent from '../Button/SecondaryButton'
import { Title2 } from '../Typography'
import theme from '../../lib/theme-config'
import Link from 'next/link'

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
    isLoggedIn: boolean
}

const PublishYourOwnContentCTA: React.FunctionComponent<IProps> = props => (
    <Container>
        <Title2>Publish your own content</Title2>
        <Buttons>
            {props.content &&
                props.content.map((content, key) => (
                    <Link
                        key={key}
                        href={
                            props.isLoggedIn
                                ? content.link
                                : `/login?r=${content.link}`
                        }
                    >
                        <a>
                            <SecondaryButtonComponent
                                key={content.actionName}
                                color="textPrimary"
                                border={'primary'}
                                width={`${DEFAULT_CARD_WIDTH}px`}
                            >
                                {content.actionName}
                            </SecondaryButtonComponent>
                        </a>
                    </Link>
                ))}
        </Buttons>
    </Container>
)

export default PublishYourOwnContentCTA
