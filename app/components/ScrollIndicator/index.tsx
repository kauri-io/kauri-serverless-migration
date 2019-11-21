import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    height: 4px;
    width: 100%;
    background: transparent;
    z-index: 999;
    @media (max-width: 600px) {
        top: 56px;
    }
`

const Fill = styled.div<{ scrolled: number }>`
    width: ${props => props.scrolled}%;
    left: 0;
    background: ${props => props.theme.colors.primary};
    height: 100%;
`

interface IState {
    scrolled: number
    triggered: boolean
}

class Indicator extends React.Component<{ markAsRead?: () => void }, IState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            scrolled: 0,
            triggered: false,
        }
        this.updateScroll = this.updateScroll.bind(this)
    }
    public componentDidMount() {
        window.addEventListener('scroll', this.updateScroll)
    }

    public componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScroll)
    }

    public updateScroll() {
        if (document && document.documentElement) {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            let triggered = this.state.triggered
            if (scrolled > 90 && triggered === false) {
                this.props.markAsRead && this.props.markAsRead()
                triggered = true
            }
            this.setState({ scrolled, triggered })
        }
    }
    public render() {
        return (
            <BarContainer>
                <Fill scrolled={this.state.scrolled} />
            </BarContainer>
        )
    }
}
export default Indicator
