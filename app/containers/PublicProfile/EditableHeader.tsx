import React, { Component } from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../components/Button/PrimaryButton'
import TertiaryButton from '../../components/Button/TertiaryButton'
import EditProfile from '../EditProfileForm'
import { WithRouterProps } from 'next/router'

const HeaderContainer = styled.div`
    background-color: ${props => props.theme.colors.bgPrimary};
    display: flex;
    align-items: flex-start;
    color: ${props => props.theme.colors.white};
    padding: 2.5em ${props => props.theme.padding};
`

const ActionsContainer = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`

interface IProps {
    router: any
    toggleEditing: () => void
}

interface IState {}

class EditableHeader extends Component<IProps, IState> {
    login: any
    componentDidMount() {
        this.props.router &&
            this.props.router.events.on(
                'routeChangeStart',
                this.props.toggleEditing
            )
    }

    componentWillUnmount() {
        this.props.router &&
            this.props.router.events.off(
                'routeChangeStart',
                this.props.toggleEditing
            )
    }

    handleSubmit() {
        this.login
            .getWrappedInstance()
            .getWrappedInstance()
            .saveUser()
    }

    render() {
        return (
            <HeaderContainer>
                <EditProfile ref={comp => (this.login = comp)} />
                <ActionsContainer>
                    <TertiaryButton onClick={() => this.props.toggleEditing()}>
                        Discard
                    </TertiaryButton>
                    <PrimaryButton onClick={() => this.handleSubmit()}>
                        Save Changes
                    </PrimaryButton>
                </ActionsContainer>
            </HeaderContainer>
        )
    }
}

export default EditableHeader
