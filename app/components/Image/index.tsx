import styled, { css } from 'styled-components'
import { InView } from 'react-intersection-observer'

interface ImgProps {
    image: string
    className?: string
    height?: number | string
    width: number | string
    mobileHeight?: number | string
    mobileWidth?: number | string
    borderRadius?: string
    inView?: boolean
    borderTopLeftRadius?: string
    borderTopRightRadius?: string
    borderBottomLeftRadius?: string
    borderBottomRightRadius?: string
    children?: any
    overlay?: {
        color?: string
        opacity: number
    }
    asBackground?: boolean
    delay?: number
}

export const getURL = (
    url: string,
    env: string,
    cloudImageId: string,
    height?: number | string,
    width?: number | string
) => {
    const heightParam = typeof height === 'number' ? height : null
    const widthParam = typeof width === 'number' ? width : null
    const getCDNURL = () => {
        if (heightParam && !widthParam) {
            return `https://${cloudImageId}.cloudimg.io/crop/2560x${heightParam}/webp/${url}`
        } else if (widthParam && !heightParam) {
            return `https://${cloudImageId}.cloudimg.io/${widthParam}/webp/${url}`
        } else if (widthParam && heightParam) {
            return `https://${cloudImageId}.cloudimg.io/crop/${widthParam}x${heightParam}/webp/${url}`
        } else {
            return `https://${cloudImageId}.cloudimg.io/width/2560/webp/${url}`
        }
    }

    if (env === 'production') {
        return getCDNURL()
    } else {
        return url
    }
}

const mobileDimensionsCSS = css<Pick<ImgProps, 'mobileHeight' | 'mobileWidth'>>`
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        height: ${props => props.mobileHeight};
        width: ${props => props.mobileWidth};
    }
`

const Img = styled.div<ImgProps>`
    height: ${props =>
        typeof props.height === 'number' ? `${props.height}px` : props.height};
    width: ${props =>
        typeof props.width === 'number' ? `${props.width}px` : props.width};
    ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
    background: ${props =>
        `${
            props.inView
                ? `url(${getURL(
                      props.image,
                      String(process.env.config),
                      String(process.env.cloudImageId),
                      props.height,
                      props.width
                  )}) center center`
                : ``
        }`};
    background-size: cover;
    opacity: ${props => (props.inView ? 1 : 0)};
    transition: opacity ${props => props.delay || 0.4}s;
    ${props =>
        props.borderTopLeftRadius &&
        `border-top-left-radius: ${props.borderTopLeftRadius}`};
    ${props =>
        props.borderTopRightRadius &&
        `border-top-right-radius: ${props.borderTopRightRadius}`};
    position: ${props => (props.asBackground ? 'absolute' : 'relative')};

    ${props =>
        props.borderBottomLeftRadius &&
        `border-bottom-left-radius: ${props.borderBottomLeftRadius}`};
    ${props =>
        props.borderBottomRightRadius &&
        `border-bottom-right-radius: ${props.borderBottomRightRadius}`};

    ${props =>
        props.overlay &&
        `&:after {
      content: "";
      opacity: ${props.overlay.opacity};
      background: ${props.overlay.color || props.theme.colors.bgPrimary};
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      ${props.borderRadius && `border-radius: ${props.borderRadius}`};
    }`}

    ${props =>
        (props.mobileHeight || props.mobileWidth) && mobileDimensionsCSS};
`

const Image = (props: ImgProps) => (
    <InView rootMargin={'200px 0px'} triggerOnce={true}>
        {({ inView, ref }) => (
            <Img {...props} ref={ref} inView={inView}>
                {props.children}
            </Img>
        )}
    </InView>
)
export default Image
