import { Tooltip } from 'react-tippy'
import { ShareButtons } from './ShareButtons'
import styled from 'styled-components'
import theme from '../../lib/theme-config'
import ShareIcon from '@material-ui/icons/Share'

const containerWidth = 40

const ReferenceContainer = styled.section`
    display: flex;
    width: ${containerWidth}px;
`

const TooltipContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: relative;
    padding: 15px 0px 15px 0px;
    padding: ${theme.space[2]}px 0px ${theme.space[2]}px 0px;
    width: ${containerWidth}px;
    > div:not(:last-child) {
        margin-bottom: ${theme.space[1]}px;
    }
    > * {
        cursor: pointer;
    }
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    border-radius: 4px;
`

const TooltipArrow = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    position: absolute;
    z-index: -1;
    top: -3%;
    width: 14px;
    height: 14px;
    background: white;
    transform: rotate(-45deg);
    border-radius: 2px;
`
export const Content: React.SFC<{ title: string; url: string }> = ({
    url,
    title,
}) => (
    <TooltipContainer>
        <TooltipArrow />
        <ShareButtons url={url} title={title} />
    </TooltipContainer>
)

interface IProps {
    url: string
    title: string
    color: string
}

const Container: React.SFC<IProps> = props => {
    const { url, title } = props
    return (
        <ReferenceContainer>
            <Tooltip
                html={<Content url={url} title={title} />}
                position="bottom"
                trigger="click"
                unmountHTMLWhenHide={true}
            >
                <ShareIcon color="primary" cursor="pointer" />
            </Tooltip>
        </ReferenceContainer>
    )
}

export default Container
