import { Grid, Typography } from '@material-ui/core'

const AcceptCommunityInvitationModalContent: React.FunctionComponent = () => (
    <Grid container>
        <Typography variant="body1">
            You’ve been invited to join this community as a member!
        </Typography>
        <br />
        <Typography variant="body2">
            By accepting, you can add new articles and collections to this
            community, update existing content, and modify the community home
            page.
        </Typography>
    </Grid>
)

export default AcceptCommunityInvitationModalContent
