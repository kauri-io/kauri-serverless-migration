import { useReducer } from 'react'
import styled, { css } from 'styled-components'
import BaseCard from './BaseCard'
import { cond, always } from 'ramda'
import { Label, Title2, H4, BodyCard } from '../Typography'
import theme from '../../lib/theme-config'
import SecondaryButton from '../Button/SecondaryButton'
import UserAvatar from '../UserAvatar'
import Image from '../Image'
import {
    toggleReducer,
    showDispatch,
    hideDispatch,
    toggleDispatch,
    toggleInitialState,
} from '../../lib/use-toggle'
import Date from '../HoverDateLabel'
import Link from 'next/link'
import { getCollectionURL } from '../../lib/getURLs'

const DEFAULT_CARD_HEIGHT = 310
const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH
const DEFAULT_CARD_PADDING = theme.space[2]

const withImageURLCss = css`
    z-index: 1;
    padding: ${props => props.theme.space[2]}px;
    > *,
    a > * {
        color: white;
    }
`

const AvatarContainer = styled.div`
    & > div {
        width: 100%;
        justify-content: center;
    }
    margin-bottom: ${props => props.theme.space[2]}px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const MoreOptionsIcon: React.FunctionComponent<{}> = () => (
    <svg
        width="23"
        height="5"
        viewBox="0 0 23 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g opacity="0.6">
            <circle cx="20.5" cy="2.5" r="2.5" fill="#1E2428" />
            <circle cx="11.5" cy="2.5" r="2.5" fill="#1E2428" />
            <circle cx="2.5" cy="2.5" r="2.5" fill="#1E2428" />
        </g>
    </svg>
)

const MoreOptions = styled.div<{ hasImageURL: boolean }>`
    display: flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${props => (props.hasImageURL ? '135' : '10')}px;
    right: 15px;
    z-index: 5;
`

const Mask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
    > a:nth-child(1) {
        height: 100%;
    }
    > *:nth-child(2) {
        margin-top: auto;
    }
    > * {
        word-break: break-word;
    }
    ${withImageURLCss};
`

interface IContentStyledComponentProps {
    imageURL: string | null
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 100%;
    width: 100%;
    > a:nth-child(1) {
        height: 100%;
    }
    > *:nth-child(2) {
        margin-top: auto;
    }
    > * {
        word-break: break-word;
    }
`

const Footer = styled.div<IContentStyledComponentProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[1]}px;
    }
`

const Count = styled.div<IContentStyledComponentProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${props =>
        typeof props.imageURL === 'string' ? props.theme.space[2] + 'px' : ''};
    padding-top: ${props =>
        typeof props.imageURL === 'string' ? props.theme.space[1] + 'px' : ''};
    > * {
        text-transform: uppercase;
    }
`

const Divider = styled.div`
    width: 100%;
    margin: ${props => props.theme.space[2]}px 0px;
    margin-bottom: ${props => props.theme.space[1]}px;
    background-color: ${props => props.theme.colors.divider};
    height: 2px;
`

interface IPublicProfileProps {
    username: string | null
    userId: string
    cardWidth: number
    userAvatar: string | null
    imageURL: string | null
}

const RenderPublicProfile: React.SFC<IPublicProfileProps> = ({
    username,
    userId,
    cardWidth = DEFAULT_CARD_WIDTH,
    userAvatar,
    imageURL,
}) => (
    <AvatarContainer>
        <UserAvatar
            fullWidth={cardWidth > DEFAULT_CARD_WIDTH}
            username={username}
            userId={userId}
            cardType="COLLECTION"
            imageURL={imageURL}
            avatar={userAvatar}
        />
    </AvatarContainer>
)

const LabelContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: ${props => props.theme.space[2]}px;
`

interface IBodyProps {
    name: string | null
    userId: string
    cardHeight: number
    cardWidth: number
    userAvatar: string | null
    imageURL: string | null
    description: string
}

const RenderBodyContent: React.SFC<IBodyProps> = ({ name, description }) => (
    <>
        <LabelContainer>
            <Label textAlign="center">{'Collection'}</Label>
        </LabelContainer>
        <Title2 textAlign="center">
            {name && name.length < 30
                ? name
                : name && `${name.substring(0, 27)}...`}
        </Title2>
        <BodyCard textAlign="center">
            {description && description.length < 100
                ? description
                : description && `${description.substring(0, 97)}...`}
        </BodyCard>
    </>
)

interface IActualContentProps {
    cardHeight: number
    cardWidth: number
    imageURL: string | null
    description: string
    id: string
    name: string | null
    username: string | null
    userId: string
    userAvatar: string | null
    date: string
    resourceType: string
    collectionURL: {
        href: string
        as: string
    }
}

const RenderActualContent: React.SFC<IActualContentProps> = ({
    imageURL,
    name,
    description,
    cardHeight,
    cardWidth,
    username,
    userId,
    userAvatar,
    date,
    resourceType,
    collectionURL,
}) => (
    <>
        <Link as={collectionURL.as} href={collectionURL.href}>
            <a>
                <RenderBodyContent
                    name={name}
                    cardHeight={cardHeight}
                    cardWidth={cardWidth}
                    imageURL={imageURL}
                    description={description}
                    userId={userId}
                    userAvatar={userAvatar}
                />
            </a>
        </Link>
        <Link
            href={
                resourceType === 'CommunityDTO'
                    ? `/community/${userId}`
                    : `/public-profile/${userId}`
            }
            as={
                resourceType === 'CommunityDTO'
                    ? `/community/${userId}`
                    : `/public-profile/${userId}`
            }
        >
            <a>
                <RenderPublicProfile
                    cardWidth={cardWidth}
                    username={username}
                    userId={userId}
                    imageURL={imageURL}
                    userAvatar={userAvatar}
                />
            </a>
        </Link>
        <Date status="PUBLISHED" date={date} />
    </>
)

interface ICardContentProps {
    cardHeight: number
    cardWidth: number
    imageURL: string | null
    description: string
    id: string
    name: string | null
    username: string | null
    userId: string
    userAvatar: string | null
    date: string
    resourceType: string
}

const RenderCardContent: React.SFC<ICardContentProps> = ({
    imageURL,
    name,
    description,
    cardHeight,
    cardWidth,
    id,
    username,
    userId,
    userAvatar,
    date,
    resourceType,
}) =>
    typeof imageURL === 'string' ? (
        <Mask>
            <RenderActualContent
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                date={date}
                description={description}
                id={id}
                imageURL={imageURL}
                name={name}
                userAvatar={userAvatar}
                userId={userId}
                username={username}
                resourceType={resourceType}
                collectionURL={getCollectionURL({
                    name,
                    id,
                })}
            />
        </Mask>
    ) : (
        <>
            <RenderActualContent
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                date={date}
                description={description}
                id={id}
                imageURL={imageURL}
                name={name}
                userAvatar={userAvatar}
                userId={userId}
                username={username}
                resourceType={resourceType}
                collectionURL={getCollectionURL({
                    name,
                    id,
                })}
            />
        </>
    )

const calculateCardHeight = cond([
    [
        ({ cardHeight, cardWidth, imageURL }) =>
            typeof imageURL !== 'string' &&
            cardHeight > DEFAULT_CARD_HEIGHT &&
            cardWidth > DEFAULT_CARD_WIDTH,
        ({ cardHeight }) => cardHeight,
    ],
    [
        ({ cardHeight, cardWidth, imageURL }) =>
            typeof imageURL !== 'string' &&
            cardHeight === DEFAULT_CARD_HEIGHT &&
            cardWidth > DEFAULT_CARD_WIDTH,
        always(310),
    ],
    [
        ({ cardHeight, imageURL }) =>
            typeof imageURL === 'string' && cardHeight > DEFAULT_CARD_HEIGHT,
        ({ cardHeight }) => cardHeight,
    ],
    [
        ({ cardHeight, imageURL }) =>
            typeof imageURL !== 'string' && cardHeight > DEFAULT_CARD_HEIGHT,
        ({ cardHeight }) => cardHeight,
    ],
    [
        ({ cardHeight, imageURL }) =>
            typeof imageURL !== 'string' && cardHeight === DEFAULT_CARD_HEIGHT,
        always(DEFAULT_CARD_HEIGHT),
    ],
    [
        ({ cardHeight, imageURL }) =>
            typeof imageURL === 'string' && cardHeight === DEFAULT_CARD_HEIGHT,
        always(DEFAULT_CARD_HEIGHT),
    ],
])

const calculateCardWidth = cond([
    [
        ({ cardWidth, imageURL }) =>
            typeof imageURL === 'string' && cardWidth > DEFAULT_CARD_WIDTH,
        ({ cardWidth }) => cardWidth,
    ],
    [
        ({ cardWidth, imageURL }) =>
            typeof imageURL === 'string' && cardWidth === DEFAULT_CARD_WIDTH,
        always(DEFAULT_CARD_WIDTH),
    ],
    [
        ({ cardWidth, imageURL }) =>
            typeof imageURL !== 'string' && cardWidth > DEFAULT_CARD_WIDTH,
        ({ cardWidth }) => cardWidth - DEFAULT_CARD_PADDING * 2,
    ],
    [
        ({ cardWidth, imageURL }) =>
            typeof imageURL !== 'string' && cardWidth === DEFAULT_CARD_WIDTH,
        always(DEFAULT_CARD_WIDTH),
    ],
])

const shiftMarginDueToNoImageURLCss = css`
    margin-top: -15px;
    margin-left: -15px;
`

const HoverContainer = styled.div<{ hasImageURL: boolean }>`
    display: flex;
    height: 100%;
    width: 100%;
    z-index: 2;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${props => props.theme.colors.textPrimary};
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
    ${props => !props.hasImageURL && shiftMarginDueToNoImageURLCss};
`

interface IHoverProps {
    hasImageURL: boolean
    hoverChildren: React.ReactElement<any>
    cancelAction: () => void
}

const Hover: React.FunctionComponent<IHoverProps> = ({
    hasImageURL,
    cancelAction,
    hoverChildren,
}) => (
    <HoverContainer hasImageURL={hasImageURL}>
        {hoverChildren}
        <SecondaryButton onClick={cancelAction}>Cancel</SecondaryButton>
    </HoverContainer>
)

interface IContentProps {
    imageURL: string | null
    name: string
    description: string
    cardHeight: number
    cardWidth: number
    id: string
    username: string | null
    userId: string
    userAvatar: string | null
    date: string
    resourceType: string
}

const RenderContent: React.SFC<IContentProps> = ({
    imageURL,
    name,
    description,
    cardHeight,
    cardWidth,
    id,
    username,
    userId,
    userAvatar,
    date,
    resourceType,
}) => (
    <>
        <Content>
            {imageURL && (
                <Image
                    borderTopLeftRadius="4px"
                    borderTopRightRadius="4px"
                    image={imageURL}
                    asBackground={true}
                    overlay={imageURL ? { opacity: 0.7 } : undefined}
                    height={250}
                    width={DEFAULT_CARD_WIDTH}
                />
            )}
            <RenderCardContent
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                date={date}
                description={description}
                id={id}
                imageURL={imageURL}
                name={name}
                userAvatar={userAvatar}
                userId={userId}
                username={username}
                resourceType={resourceType}
            />
        </Content>
    </>
)

interface IProps {
    href: {
        href: string
        as: string
    }
    id: string
    description: string
    date: string
    name: string
    username: string | null
    userAvatar: string | null
    userId: string
    articleCount: string
    collectionCount: string
    imageURL: string | null
    cardHeight: number
    cardWidth?: number
    isChosenCollection?: boolean
    isLoggedIn?: boolean
    canAccessHoverChildren?: boolean
    triggerHoverChildrenOnFullCardClick?: boolean
    hoverChildren?:
        | null
        | ((payload: {
              hideDispatch: () => void
              showDispatch: () => void
              toggleDispatch: () => void
          }) => React.ReactElement<any>)
    resourceType: string // USER | COMMUNITY
}

interface IRenderFooterProps {
    href: {
        href: string
        as: string
    }
    imageURL: string | null
    articleCount: string
    collectionCount: string
}

const RenderFooter: React.FunctionComponent<IRenderFooterProps> = ({
    imageURL,
    articleCount,
    collectionCount,
    href,
}) => (
    <Link href={href.href} as={href.as}>
        <a>
            <Footer imageURL={imageURL}>
                {!!Number(articleCount) && (
                    <Count imageURL={imageURL}>
                        <H4>{articleCount}</H4>
                        <Label>{`Article${
                            Number(articleCount) > 1 ? 's' : ''
                        }`}</Label>
                    </Count>
                )}
                {!!Number(collectionCount) && (
                    <Count imageURL={imageURL}>
                        <H4>{collectionCount}</H4>
                        <Label>{`Collection${
                            Number(collectionCount) > 1 ? 's' : ''
                        }`}</Label>
                    </Count>
                )}
            </Footer>
        </a>
    </Link>
)

const CollectionCard: React.FunctionComponent<IProps> = ({
    id,
    description,
    date,
    name,
    username,
    userId,
    userAvatar,
    imageURL,
    cardWidth = DEFAULT_CARD_WIDTH,
    cardHeight = DEFAULT_CARD_HEIGHT,
    hoverChildren,
    isChosenCollection,
    articleCount,
    collectionCount,
    triggerHoverChildrenOnFullCardClick = false,
    canAccessHoverChildren,
    resourceType,
    href,
}) => {
    const [{ toggledOn }, dispatch] = useReducer(
        toggleReducer,
        toggleInitialState
    )

    return (
        <BaseCard
            key={String(id)}
            imageURL={String(imageURL)}
            cardWidth={calculateCardWidth({ cardWidth, imageURL })}
            cardHeight={calculateCardHeight({
                cardHeight,
                cardWidth,
                imageURL,
            })}
            isChosenArticle={isChosenCollection}
            toggledOn={toggledOn}
        >
            {!!hoverChildren && toggledOn === true && (
                <Hover
                    hasImageURL={Boolean(imageURL)}
                    cancelAction={hideDispatch(dispatch)}
                    hoverChildren={hoverChildren({
                        hideDispatch: hideDispatch(dispatch),
                        showDispatch: showDispatch(dispatch),
                        toggleDispatch: toggleDispatch(dispatch),
                    })}
                />
            )}
            <Container
                onClick={() =>
                    triggerHoverChildrenOnFullCardClick &&
                    showDispatch(dispatch)()
                }
            >
                {!!hoverChildren && canAccessHoverChildren && (
                    <MoreOptions
                        hasImageURL={!!imageURL}
                        onClick={toggleDispatch(dispatch)}
                    >
                        <MoreOptionsIcon />
                    </MoreOptions>
                )}
                <RenderContent
                    cardHeight={cardHeight}
                    cardWidth={cardWidth}
                    date={date}
                    description={description}
                    id={id}
                    imageURL={imageURL}
                    name={name}
                    userAvatar={userAvatar}
                    userId={userId}
                    username={username}
                    resourceType={resourceType}
                />
                {typeof imageURL !== 'string' &&
                (Number(articleCount) || Number(collectionCount)) ? (
                    <Divider />
                ) : null}
                <RenderFooter
                    href={href}
                    imageURL={imageURL}
                    articleCount={articleCount}
                    collectionCount={collectionCount}
                />
            </Container>
        </BaseCard>
    )
}

export default CollectionCard
