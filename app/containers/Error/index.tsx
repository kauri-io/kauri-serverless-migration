import styled from 'styled-components'
import Button from '../../components/Button'
import Link from 'next/link'

const ErrorContainer = styled.div`
    background: ${props => props.theme.bgPrimary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: calc(100vh - 133px);
    flex-direction: column;
`

// Because Nelson
const Code = styled.div`
    font-size: 90px;
`

const Copy = styled.div`
    font-size: ${props => props.theme.fontSizes[3]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
`

const Error = ({ code }: { code: string }) => (
    <ErrorContainer>
        <Code>{code}</Code>
        <Copy>Sorry, something went wrong :(</Copy>
        <Link href="/" as="/">
            <a>
                <Button color="primary" variant="contained">
                    Go to homepage
                </Button>
            </a>
        </Link>
    </ErrorContainer>
)

export default Error
