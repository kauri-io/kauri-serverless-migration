import styled from 'styled-components'
import Button from '../../components/Button'
import Stack from 'stack-styled'
import Link from 'next/link'
import { Typography } from '@material-ui/core'

const ResourceDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
`

const ViewContainer = styled.section`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    > :first-child {
        margin-right: ${props => props.theme.space[2]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        display: none;
    }
`

const SignupBannerStack = styled(Stack)`
    padding: ${props => props.theme.space[3]}px ${props => props.theme.padding};
    background: ${props => props.theme.colors.bgPrimary};
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        padding: ${props => props.theme.space[3]}px
            ${props => props.theme.space[2]}px;
    }
`

const SignupBanner: React.FunctionComponent = () => (
    <SignupBannerStack
        alignItems={['']}
        justifyContent={['']}
        gridAutoFlow={['column']}
        gap={30}
    >
        <ResourceDetailsContainer>
            <Typography color="secondary" variant="h4" component="h1">
                Learn to Build on Ethereum with Kauri
            </Typography>
            <Typography color="secondary">
                Articles, Tutorials, Documentation and Best Practices
            </Typography>
        </ResourceDetailsContainer>
        <ViewContainer>
            <Link href="/login">
                <a>
                    <Button
                        color="primary"
                        variant="contained"
                    >{`Sign up`}</Button>
                </a>
            </Link>
            <Link href="/help">
                <a>
                    <Button color="primary" variant="outlined">
                        Learn about kauri
                    </Button>
                </a>
            </Link>
        </ViewContainer>
    </SignupBannerStack>
)

export default SignupBanner
