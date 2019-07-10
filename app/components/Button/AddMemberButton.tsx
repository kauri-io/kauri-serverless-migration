import styled from 'styled-components'

interface IButtonStyleProps {
    bg: string
    disabled: boolean
    bgHover: string
}

const AddMemberButton = styled.img<IButtonStyleProps>`
    height: 30px;
    width: 30px;
    cursor: pointer;
`

interface IProps {
    handleClick?: () => void
    onClick?: () => void
    disabled?: boolean
    bg?: string
    bgHover?: string
    fontWeight?: number
    fontSize?: number
}

const AddMemberButtonComponent: React.FunctionComponent<IProps> = ({
    bg = 'primary',
    bgHover = 'primaryDark',
    handleClick,
    onClick,
    disabled,
}) => (
    <AddMemberButton
        src="/static/images/icons/add-member-icon.png"
        disabled={Boolean(disabled)}
        onClick={onClick || handleClick}
        bg={bg}
        bgHover={bgHover}
    />
)

export default AddMemberButtonComponent
