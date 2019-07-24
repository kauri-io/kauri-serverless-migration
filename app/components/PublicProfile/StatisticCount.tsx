import styled from 'styled-components'
import { cond } from 'ramda'

interface IPageTypeProps {
    pageType: string
}

const Count = styled.h3<IPageTypeProps>`
    color: white;
    font-size: ${props => props.theme.fontSizes[7]}px;
    font-weight: ${props => props.theme.fontWeight[2]};
    margin: 0px;
    margin-bottom: ${props => props.theme.space[0]}px;
    opacity: ${props =>
        typeof props.pageType === 'string' &&
        props.pageType !== 'CollectionPage'
            ? 0.2
            : 1.0};
`

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
`

const Name = styled.span<IPageTypeProps>`
    color: white;
    font-size: ${props => props.theme.fontSizes[0]}px;
    font-weight: ${props => props.theme.fontWeight[3]};
    opacity: ${props =>
        typeof props.pageType === 'string' &&
        props.pageType !== 'CollectionPage'
            ? 0.2
            : 1.0};
    text-transform: uppercase;
`

const pluraliseCount = (payload: number) =>
    cond([
        [
            count => count > 1000000,
            count => `${(count / 1000000).toPrecision(2)}M`,
        ],
        [
            count => count > 1000 && count < 1000000,
            count => `${(count / 1000).toPrecision(2)}K`,
        ],
        [count => count < 1000, count => String(count)],
    ])(payload)

const lastStringValue = (name: string) =>
    name && name.length > 0 && name[name.length - 1]

const pluraliseName = (payload: { count: number; name: string }) =>
    cond([
        [
            ({ count, name }) => count > 1 && lastStringValue(name) === 's',
            ({ name }) => name,
        ],
        [
            ({ count, name }) => count > 1 && lastStringValue(name) !== 's',
            ({ name }) => `${name}s`,
        ],
        [
            ({ count, name }) => count === 1 && lastStringValue(name) === 's',
            ({ name }) => name.substring(0, name.length - 1),
        ],
        [({ name }) => typeof name === 'string', ({ name }) => name],
    ])(payload)

interface IProps {
    name: string
    count: number
    pageType: string
}

const Container: React.SFC<IProps> = ({ name, count, pageType }) => (
    <SectionContainer key={name}>
        <Count pageType={pageType}>{pluraliseCount(count)}</Count>
        <Name pageType={pageType}>{pluraliseName({ name, count })}</Name>
    </SectionContainer>
)

export default Container
