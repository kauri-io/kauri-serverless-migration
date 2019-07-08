import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const EmailAddress = styled.a`
    height: 16px;
    width: 82px;
    color: #0ba986;
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
`

export default () => (
    <Container>
        <EmailAddress href="mailto:info@kauri.io">info@kauri.io</EmailAddress>
    </Container>
)
