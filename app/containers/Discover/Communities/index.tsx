import React from 'react'
import List from './List'
import Header from './Header'
import styled from 'styled-components'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { connect } from 'react-redux'

const ContentContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CommunityDiscover = ({ isLoggedIn, routeChangeAction }) => (
    <ContentContainer>
        <Header isLoggedIn={isLoggedIn} routeChangeAction={routeChangeAction} />
        <List />
    </ContentContainer>
)

const mapStateToProps = state => {
    return {
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}
export default connect(
    mapStateToProps,
    {
        routeChangeAction,
    }
)(CommunityDiscover)
