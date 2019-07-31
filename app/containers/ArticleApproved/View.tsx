import React from 'react'
import Head from 'next/head'
import { cond, equals, always, tail } from 'ramda'
import styled from 'styled-components'
import ArticleCard from '../../components/Card/ArticleCardMaterial'
import PrimaryButton from '../../components/Button/PrimaryButton'
import { Title1, BodyCard } from '../../components/Typography'
import { Article } from '../../queries/Fragments/__generated__/Article'
import { ShareButtons } from '../../components/Tooltip/ShareButtons'
import getArticleHref from '../../lib/getArticleHref'

export interface IProps {
    data: {
        getArticle: Article
    }
    hostName: string
    routeChangeAction: (route: string) => void
    type: 'published' | 'approved' | 'drafted' | 'updated'
    user: { id: string }
    isLoggedIn: boolean
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 76px);
    background-color: ${props => props.theme.primaryTextColor};
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
`

const DescriptionContainer = styled.div`
    max-width: 500px;
    text-align: center;
    > * {
        word-break: break-word;
    }
`

const ArticleApprovedActionButtons = styled.div`
    display: flex;
    > :first-child:not(:only-child) {
        margin-right: 10px;
    }
    > :only-child {
        margin-right: 0px;
    }
    margin-top: 20px;
    > :first-child {
        margin-right: 0px;
    }
`

class ArticleApproved extends React.Component<IProps> {
    render() {
        const { data, routeChangeAction, type, hostName } = this.props
        const subjectCopy = cond<string, string>([
            [
                equals('updated'),
                always(
                    'draft has been updated. You can view all drafts on your profile page.'
                ),
            ],
            [
                equals('drafted'),
                always(
                    `has been saved as a draft.
           You can view all drafts on your profile page.
           All drafts are unlisted, rather than private.
           This means you can send the link to someone and they can view it, but your article will not be discoverable or searchable until it is published.
          `
                ),
            ],
            [equals('published'), always('is now live')],
            [
                equals('approved'),
                always('now needs publishing from author before going live'),
            ],
        ])(type)

        const capitalize = (stringToCapitalize: string) =>
            stringToCapitalize.length > 0 &&
            stringToCapitalize[0].toUpperCase() + tail(stringToCapitalize)

        if (this.props.data.getArticle) {
            const article = data.getArticle

            return (
                <Container>
                    <Head>
                        <title>{`Kauri - Article ${capitalize(type)}`}</title>
                    </Head>
                    <Title1 color="white">{capitalize(type)}</Title1>
                    <DescriptionContainer>
                        <BodyCard color="white">{`The article ${subjectCopy}`}</BodyCard>
                    </DescriptionContainer>
                    <ArticleCard href={getArticleHref(article)} {...article} />
                    <ArticleApprovedActionButtons>
                        <ShareButtons
                            horizontal={true}
                            title={String(article.title)}
                            url={String(
                                `https://${hostName.replace(
                                    'api.',
                                    ''
                                )}/article/${article.id}?utm_campaign=published`
                            )}
                        />
                        <PrimaryButton
                            onClick={() =>
                                routeChangeAction(
                                    `/public-profile/${this.props.user &&
                                        this.props.user.id}`
                                )
                            }
                        >
                            My Articles
                        </PrimaryButton>
                    </ArticleApprovedActionButtons>
                </Container>
            )
        }
    }
}

export default ArticleApproved
