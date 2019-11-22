import React from 'react'
import styled from 'styled-components'
import Email from './Email'
import Logo from './Logo'
import ConsenSys from './Consensys'
import { Hidden } from '@material-ui/core'

export const footerHeight = 57

const NewFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.primaryTextColor};
    padding: 0px ${props => props.theme.padding};

    @media (max-width: 500px) {
        height: 100% & div {
            display: none;
        }
    }
`

class StyledFooter extends React.Component<{}> {
    render() {
        return (
            <NewFooter>
                <Hidden smDown={true}>
                    <Email />
                </Hidden>
                <Logo />
                <Hidden smDown={true}>
                    <ConsenSys />
                </Hidden>
            </NewFooter>
        )
    }
}

export default StyledFooter
