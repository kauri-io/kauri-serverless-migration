import Table from './Table'
import { H3, BodyCard } from '../../../../components/Typography'
import Button from '../../../../components/Button'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import {
    leaveCommunityAction,
    removeGrantedMemberAction,
} from '../../../Community/Module'

export interface ICommunity {
    role: string
    community: {
        id: string
        name: string
    }
}

interface IProps {
    removeGrantedMemberAction: typeof removeGrantedMemberAction
    routeChangeAction: (route: string) => void
    leaveCommunityAction: typeof leaveCommunityAction
    data: ICommunity[]
    ownProfile: {
        getMyProfile: {
            id: string
        }
    }
}

const NoCommunities: React.FunctionComponent<
    Pick<IProps, 'routeChangeAction'>
> = ({ routeChangeAction }) => (
    <Grid>
        <H3>Communities</H3>
        <BodyCard>You are not part of any communities yet.</BodyCard>
        <Grid>
            <Button
                color="primary"
                variant="contained"
                onClick={() => routeChangeAction(`/create-community`)}
            >
                Create Community
            </Button>
        </Grid>
    </Grid>
)

const MyCommunities: React.FunctionComponent<IProps> = props => {
    const useStyles = makeStyles((theme: Theme) => ({
        table: {
            margin: theme.spacing(2),
        },
    }))
    const classes = useStyles()
    return Array.isArray(props.data) && props.data.length ? (
        <Grid className={classes.table} container={true} direction="column">
            <H3>Communities</H3>
            <BodyCard>
                The communities you manage and moderate are displayed below:
            </BodyCard>
            <Table
                removeGrantedMemberAction={props.removeGrantedMemberAction}
                leaveCommunityAction={props.leaveCommunityAction}
                userId={props.ownProfile.getMyProfile.id}
                data={props.data}
            />
        </Grid>
    ) : (
        <NoCommunities routeChangeAction={props.routeChangeAction} />
    )
}
export default MyCommunities
