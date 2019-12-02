import styled from 'styled-components'

const InvertSocialIcon = styled.img`
    filter: invert(100%);
`

interface ISocialWebsiteIconProps {
    brand: string
    height?: number
    socialURL?: string
    invert?: boolean
    className?: string
}

const SocialWebsiteIcon: React.SFC<ISocialWebsiteIconProps> = ({
    height = 20,
    brand,
    socialURL,
    invert = true,
    className,
}) => {
    const getIconUrl = brand => {
        return `https://unpkg.com/simple-icons@latest/icons/${brand}.svg`
    }
    return (
        <>
            <a target="_blank" href={socialURL}>
                {invert && (
                    <InvertSocialIcon
                        alt={brand}
                        height={height}
                        width={height}
                        src={getIconUrl(brand)}
                        className={className}
                    />
                )}

                {!invert && (
                    <img
                        alt={brand}
                        height={height}
                        width={height}
                        src={getIconUrl(brand)}
                        className={className}
                    />
                )}
            </a>
        </>
    )
}
export default SocialWebsiteIcon
