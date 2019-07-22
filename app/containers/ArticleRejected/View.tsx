import React from 'react'
import styled from 'styled-components'
import SecondaryButton from '../../components/Button/SecondaryButton'
import { H2 } from '../../components/Typography'
// import { ArticleApprovedConfirmationLogoBadge } from "../../common/ActionBadge";

const ConfirmationSubject = styled.h2`
    color: #ffffff;
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 50px;
`

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${props => props.theme.primaryTextColor};
    > :first-child {
        margin-bottom: 30px;
        margin-bottom: 7px;
    }
`

interface IProps {
    data: any
    routeChangeAction: any
    userId: any
}

const ArticleRejected = (props: IProps) => {
    const { data, routeChangeAction, userId } = props
    return (
        <Container>
            <H2>Article Rejected</H2>
            <ConfirmationSubject>
                {(data && data.getArticle && data.getArticle.subject) ||
                    'The author has been notified by email with your note.'}
            </ConfirmationSubject>
            <SecondaryButton
                onClick={() => routeChangeAction(`/public-profile/${userId}`)}
            >
                Back to my articles
            </SecondaryButton>
        </Container>
    )
}

export default ArticleRejected
