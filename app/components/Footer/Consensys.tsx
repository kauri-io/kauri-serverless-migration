import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    > :nth-child(2) {
        margin-left: 15px;
    }
    > :last-child {
        margin-left: 4px;
    }
`

const ConsenSysFormationIcon = styled.img`
    width: 34px;
`

const ConsenSysLogoIcon = styled.a`
    color: #fff;
    font-weight: 500;
    font-size: 13px;
`

const PrivacyPolicy = styled(ConsenSysLogoIcon)`
    margin-left: 10px;
    margin-right: 3px;
    font-weight: normal;
    font-size: 10px;
`

const TermsOfService = styled(PrivacyPolicy)`
    margin-left: 0px;
`

export default () => (
    <Container>
        <ConsenSysLogoIcon>© Copyright 2019</ConsenSysLogoIcon>
        <ConsenSysFormationIcon
            src={'/static/images/icons/footer-consensys.png'}
        />
        <ConsenSysLogoIcon>ConsenSys Formation</ConsenSysLogoIcon>
        <PrivacyPolicy href="/privacy-policy">Privacy Policy </PrivacyPolicy>
        <ConsenSysLogoIcon>|</ConsenSysLogoIcon>
        <TermsOfService href="/terms-of-use">Terms of Use</TermsOfService>
    </Container>
)
