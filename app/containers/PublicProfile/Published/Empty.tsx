import Button from '../../../components/Button'
import PublicProfileEmptyState from '../../../components/PublicProfileEmptyState'
import Link from 'next/link'
import { Grid, Typography } from '@material-ui/core'

export default ({ isLoggedIn, isOwner }) => (
    <Grid>
        <PublicProfileEmptyState
            iconSrc={'/static/images/icons/no-published-articles.svg'}
            description={
                isLoggedIn ? (
                    <Grid>
                        <Typography>
                            Any articles you've published on Kauri will appear
                            here.
                        </Typography>
                        <Typography>
                            Get started by creating a new draft below, or
                            importing one you've written on Medium!
                        </Typography>
                        <Typography>
                            Your draft articles will be shown in the next tab
                            until you publish them.
                        </Typography>
                    </Grid>
                ) : (
                    "The user hasn't published any articles yet. Once they do, they will appear here!"
                )
            }
            title="No Articles Published"
            primaryButton={
                isOwner ? (
                    <Link href="/write-article">
                        <a>
                            <Button color="primary" variant="contained">
                                Create Article
                            </Button>
                        </a>
                    </Link>
                ) : (
                    <div></div>
                )
            }
        />
    </Grid>
)
