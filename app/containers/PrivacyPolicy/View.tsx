import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    width: 100%;
`

interface IProps {
    routeChangeAction: (route: string) => void
}

type State = {}

class PrivacyPolicy extends Component<IProps, State> {
    render() {
        return (
            <section>
                <Content>
                    <iframe
                        style={{
                            minHeight: '85vh',
                            width: '60%',
                            border: 'none',
                        }}
                        src="https://docs.google.com/document/d/e/2PACX-1vQL9NX53wUMwWgiWQJnSuGne-gmKWb_dhauDt1au9rwsZfjnzeYFuO1ftfyZ28wSCGj10f-tWo3HJJ6/pub?embedded=true"
                    />
                </Content>
            </section>
        )
    }
}

export default PrivacyPolicy
