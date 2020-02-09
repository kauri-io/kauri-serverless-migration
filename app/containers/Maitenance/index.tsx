import styled from 'styled-components'

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
    font-size: 70px;
`

const Copy = styled.div`
    font-size: ${props => props.theme.fontSizes[3]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
`

const Error = () => (
    <ErrorContainer>
        <Code>Kauri is down for maintenance!</Code>
        <Copy>
            We expect to be back in a few hours, thanks for your patience.
        </Copy>
    </ErrorContainer>
)

export default Error
