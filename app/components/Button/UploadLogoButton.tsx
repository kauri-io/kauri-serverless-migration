import styled from 'styled-components'
import { fontSize as fontSizeSS, color as colorSS, space } from 'styled-system'
import initUppy from '../../lib/init-uppy'
import { useEffect } from 'react'
import config from '../../config'

interface IButtonProps {
    bg?: string | null
    height?: string
    width?: string
    fontSize?: number
    color?: string
    disabled?: boolean
}

const UploadLogoButton = styled.button<IButtonProps>`
    border: 1px solid
        ${({
            theme: {
                colors: { primary },
            },
        }) => primary};
    border-radius: 4px;
    background: ${props =>
        props.bg ? `url(${props.bg}) center center` : 'transparent'};
    background-size: cover;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    height: ${props => props.height};
    width: ${props => props.width};
    padding: 0;
    text-transform: uppercase;
    opacity: ${props => (props.disabled ? '0.5' : '1')};
    :hover {
        border: 2px solid
            ${({
                theme: {
                    colors: { primary },
                },
            }) => primary};
    }
    font-weight: ${props => props.theme.fontWeight[2]};
    ${fontSizeSS};
    ${colorSS};
`

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;

    > :first-child {
        height: 18px;
        width: 18px;
        ${space};
    }
`

interface IProps extends IButtonProps {
    className?: string
    handleClick?: () => void
    onClick?: () => void
    disabled?: boolean
    space?: number
    text?: string
    callback: (hash: string) => void
}

const UploadLogoButtonComponent: React.FunctionComponent<IProps> = ({
    bg,
    fontSize = 0,
    color = 'textPrimary',
    height = '100px',
    width = '100px',
    text = 'Logo',
    handleClick,
    onClick,
    children,
    disabled,
    callback,
}) => {
    useEffect(() => {
        const uppy = initUppy({ allowGifs: false, trigger: '.image-upload' })
        uppy.on('upload-success', (_data, data2) =>
            callback(`https://${config.gateway}:443/ipfs/${data2.body.hash}`)
        )
    }, [])
    return (
        <UploadLogoButton
            className="image-upload"
            bg={bg}
            height={height}
            width={width}
            disabled={disabled}
            onClick={onClick || handleClick}
            color={color}
            fontSize={fontSize}
            type="button"
        >
            <Overlay>
                <img src="https://png.icons8.com/color/50/000000/upload.png" />
                {text || children}
            </Overlay>
        </UploadLogoButton>
    )
}

export default UploadLogoButtonComponent
