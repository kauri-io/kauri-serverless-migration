import styled from 'styled-components'

const InvertSocialIcon = styled.img`
    filter: invert(100%);
`

interface ISocialWebsiteIconProps {
    brand: string
    height?: number
    socialURL?: string
}

const SocialWebsiteIcon: React.SFC<ISocialWebsiteIconProps> = ({
    height = 20,
    brand,
    socialURL,
}) => (
    <a target="_blank" href={socialURL}>
        <InvertSocialIcon
            alt={brand}
            height={height}
            width={height}
            src={`https://unpkg.com/simple-icons@latest/icons/${brand}.svg`}
        />
    </a>
)
export default SocialWebsiteIcon
