import React from 'react'
import styled from 'styled-components'
import { Button, Hidden } from '@material-ui/core'

const CollectionsHeader = styled.div`
    background: white url('static/images/discover-collections-banner.svg')
        no-repeat center center / cover;
    background-color: white;
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

const Header = ({ isLoggedIn, routeChangeAction }) => (
    <CollectionsHeader>
        <KauriTitle>Collections</KauriTitle>
        <KauriDescription>Curate content you love from Kauri and other sources.</KauriDescription>

        <Hidden xsDown={true}>
            <Button
                color="primary"
                variant="text"
                onClick={() => {
                    return isLoggedIn
                        ? routeChangeAction(`/create-collection`)
                        : routeChangeAction(`/login?r=/create-collection`)
                }}
            >
                Create a collection
            </Button>
        </Hidden>
    </CollectionsHeader>
)

export default Header
