import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import StyledFooter from '../components/Footer'
import Modal from '../components/Modal'
import Notification from '../components/Notification'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { IReduxState } from '../lib/Module'

const mapStateToProps = (state: IReduxState) => ({
    isModalOpen: state.modal.isModalOpen,
})

const useStyles = makeStyles((theme: Theme) => ({
    constrained: {
        maxWidth: 1272,
        width: '100%',
        margin: 'auto',
    },
    item: {
        width: '100%',
        flex: 1,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: `calc(100vh)`,
        overflow: 'hidden',
        [theme.breakpoints.up('xs')]: {
            paddingTop: 64,
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: 56,
        },
    },
}))

interface IProps {
    maxWidthConstrained?: boolean
    children: any
    hideNav: boolean
}

const Layout = ({ children, maxWidthConstrained, hideNav }: IProps) => {
    const classes = useStyles({})
    return (
        <Grid container={true} className={classes.root}>
            <Modal />
            <Notification />
            {!hideNav && (
                <Grid sm={12} item={true}>
                    <Navbar />
                </Grid>
            )}
            <Grid sm={12} item={true} className={classes.item}>
                <div className={maxWidthConstrained ? classes.constrained : ''}>
                    {children}
                </div>
            </Grid>
            <StyledFooter />
        </Grid>
    )
}

export default connect(mapStateToProps)(Layout)
