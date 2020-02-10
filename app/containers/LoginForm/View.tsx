import { makeStyles, Theme, Typography, Grid } from '@material-ui/core'
import Button from '../../components/Button'
import Image from '../../components/Image'
import NoSsr from '@material-ui/core/NoSsr'
import LoadingComponent from '../../components/Loading'
import Link from 'next/link'
import Head from 'next/head'

const useStyles = makeStyles((theme: Theme) => ({
    loginContainer: {
        background: theme.palette.common.black,
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    loadingContainer: {
        background: theme.palette.common.black,
        height: '100%',
        flex: 1,
        display: 'flex',
    },
    link: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        marginTop: theme.spacing(3),
    },
    kauriIntro: {
        color: theme.palette.common.white,
        marginTop: theme.spacing(3),
    },
}))

const Web3Unavailable = ({ classes, hostName }) => (
    <>
        <Typography gutterBottom={true} color="secondary" variant="body1">
            Kauri uses the Metamask browser extension to authenticate you with
            the Ethereum network.
        </Typography>
        <Image
            width={100}
            height={100}
            image={`https://${hostName}/static/images/metamask/avatar.png`}
        />
        <Typography className={classes.kauriIntro}>
            Download it here -{' '}
            <a
                className={classes.link}
                href="https://metamask.io"
                target="_blank"
            >
                https://metamask.io
            </a>
        </Typography>
        <div className={classes.kauriIntro}>
            <Link href="/article/2a587f3962044515937a8105cfa1568c/metamask-interact-with-ethereum-in-your-browser">
                <a className={classes.link}>Learn more about Metamask</a>
            </Link>
        </div>

        <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
        />
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
                __html: `	#mc_embed_signup{margin-top: 40px; width: 500px; background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }`,
            }}
        />
        <div id="mc_embed_signup">
            <form
                action="https://kauri.us17.list-manage.com/subscribe/post?u=e46233ccfd6bb938ab7cbb5a3&amp;id=f49f81a2a9"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
            >
                <div id="mc_embed_signup_scroll">
                    <div className="indicates-required">
                        <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">
                            Email Address <span className="asterisk">*</span>
                        </label>
                        <input
                            type="email"
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                        />
                    </div>
                    <div id="mce-responses" className="clear">
                        <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: 'none' }}
                        />
                        <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                    >
                        <input
                            type="text"
                            name="b_e46233ccfd6bb938ab7cbb5a3_f49f81a2a9"
                            tabIndex={-1}
                            defaultValue=""
                        />
                    </div>
                    <div className="clear">
                        <input
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button"
                        />
                    </div>
                </div>
            </form>
        </div>
        <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        />
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);`,
            }}
        />
    </>
)

const Web3Available = ({ handleSubmit }) => (
    <>
        <Typography gutterBottom={true} color="secondary" variant="body1">
            Sign in using MetaMask.
        </Typography>
        <Button
            color="primary"
            variant="contained"
            onClick={() => handleSubmit()}
        >
            SIGN IN
        </Button>
    </>
)

export default ({ web3, handleSubmit, hostName }) => {
    const classes = useStyles({})

    return (
        <>
            <Head>
                <title>{`Kauri - Login`}</title>
            </Head>
            <Grid
                container={true}
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.loginContainer}
            >
                {!process.browser && <LoadingComponent />}
                {process.browser && (
                    <NoSsr>
                        <Typography
                            gutterBottom={true}
                            variant="h4"
                            color="secondary"
                        >
                            Web3 Sign In
                        </Typography>
                        {web3 && <Web3Available handleSubmit={handleSubmit} />}
                        {!web3 && (
                            <Web3Unavailable
                                hostName={hostName}
                                classes={classes}
                            />
                        )}
                    </NoSsr>
                )}
            </Grid>
        </>
    )
}
