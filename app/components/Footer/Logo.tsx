import React from 'react'
import styled from 'styled-components'

const LogoIcon = styled.img`
    width: 26px;
    height: 25px;
`

const Container = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 10px;
`

const KauriCopy = styled.span`
    color: #fff;
    line-height: 12px;
    font-size: 12px;
`

export default () => (
    <Container className="kauri-logo">
        <LogoIcon
            alt="Kauri logo"
            src={'/static/images/icons/footer-logo.png'}
        />
        <KauriCopy>kauri</KauriCopy>
    </Container>
)
