import React from 'react'
import styled from 'styled-components'
import { Button, Hidden } from '@material-ui/core'
import Link from 'next/link'

const ArticlesHeader = styled.div`
    background: white url('static/images/discover-articles-banner.svg')
        no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    width: 100%;
    text-align: center;
`

const KauriTitle = styled.h1`
    color: #333333;
    font-weight: 300;
    font-size: ${props => props.theme.fontSizes[8]}px;
    margin-bottom: 8px;

    @media (max-width: 500px) {
        width: 300px;
    }
`

const KauriDescription = styled.div`
    margin-bottom: 12px;
    @media (max-width: 500px) {
        width: 300px;
    }
`

const Header: React.FunctionComponent = () => (
    <ArticlesHeader>
        <KauriTitle>Discover Articles</KauriTitle>
        <KauriDescription>User and Community Articles</KauriDescription>

        <Hidden xsDown={true}>
            <Link as="/write-article" href="/write-article">
                <Button color="primary" variant="text">
                    Write an article
                </Button>
            </Link>
        </Hidden>
    </ArticlesHeader>
)

export default Header
