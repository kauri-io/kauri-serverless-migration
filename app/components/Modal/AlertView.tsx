import { Title2 } from '../Typography'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

interface IProps {
    title: string
    content: React.ReactElement<any>
    confirmButtonText?: string
    closeButtonText?: string
    confirmButtonAction: any
    closeModalAction: () => void
    hideCloseButton?: boolean
    hideConfirmButton?: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 120px;
    justify-content: center;
    align-items: center;
`

const TitleContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    > * {
        text-align: center;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: auto;
    align-self: center;
    justify-content: space-between;
    width: 100%;
    > :first-child {
        margin-right: ${props => props.theme.space[2]}px;
    }
`

const handleConfirmAction = (confirmButtonAction: any) => () => {
    confirmButtonAction()
}

const AlertViewComponent: React.FunctionComponent<IProps> = props => (
    <Container>
        <TitleContainer>
            <Title2>{props.title}</Title2>
        </TitleContainer>
        {props.content}
        <Footer>
            {!props.hideCloseButton && (
                <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleConfirmAction(props.closeModalAction)}
                >
                    {props.closeButtonText || 'Cancel'}
                </Button>
            )}
            {!props.hideConfirmButton && (
                <Button
                    color="primary"
                    variant="contained"
                    style={{ color: 'white' }}
                    onClick={handleConfirmAction(props.confirmButtonAction)}
                >
                    {props.confirmButtonText || 'Confirm'}
                </Button>
            )}
        </Footer>
    </Container>
)

export default AlertViewComponent
