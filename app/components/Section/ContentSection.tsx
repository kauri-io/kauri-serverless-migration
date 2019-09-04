import styled from 'styled-components'
import Stack, { IStackStyledProps } from 'stack-styled'
import { BackgroundProps } from 'styled-system'
import theme from '../../lib/theme-config'

const ContentSectionStack = styled<BackgroundProps & IStackStyledProps>(
    props => <Stack {...props} />
)`
    background: ${props => props.theme.colors[props.background as string]};
    min-height: calc(100vh - 220px);
    padding: ${props => props.theme.paddingTop} ${props => props.theme.padding};
    display: flex;
`

interface IProps {
    alignItems?: [string, string]
    bg?: string
    justifyContent?: [string, string]
    gridAutoFlow?: [string, string]
    gap?: number
}

const ContentSection: React.FunctionComponent<IProps> = ({
    alignItems = ['', 'start'],
    bg = 'tertiaryBackgroundColor',
    children,
    justifyContent = ['', 'start'],
    gridAutoFlow = ['', 'row'],
    gap = theme.space[3],
}) => (
    <ContentSectionStack
        background={bg}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gridAutoFlow={gridAutoFlow}
        gap={gap}
    >
        {children}
    </ContentSectionStack>
)

export default ContentSection
