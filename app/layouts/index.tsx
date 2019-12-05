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
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
    },
    notConstrained: {
        width: '100%',
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
    },
    root: (props: any) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: `calc(100vh)`,
        overflow: 'hidden',
        [theme.breakpoints.up('lg')]: {
            paddingTop: props.hideNav ? 0 : 64,
        },
        [theme.breakpoints.down('lg')]: {
            paddingTop: 56,
        },
    }),
}))

interface IProps {
    maxWidthConstrained?: boolean
    children: any
    hideNav: boolean
    hideFooter?: boolean
}

const Layout = ({
    children,
    maxWidthConstrained,
    hideNav,
    hideFooter,
}: IProps) => {
    const classes = useStyles({ hideNav })
    return (
        <Grid container={true} className={classes.root}>
            <Modal />
            <Notification />
            {!hideNav && (
                <Grid sm={12} item={true}>
                    <Navbar />
                </Grid>
            )}
            <Grid
                sm={12}
                item={true}
                className={
                    maxWidthConstrained
                        ? classes.constrained
                        : classes.notConstrained
                }
            >
                {children}
            </Grid>
            {!hideFooter && <StyledFooter />}
        </Grid>
    )
}

export default connect(mapStateToProps)(Layout)
