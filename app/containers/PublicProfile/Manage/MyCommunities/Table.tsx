import { Label } from '../../../../components/Typography'
import Link from '../../../../components/Link'
import { ICommunity } from './index'
import { getCommunityURL } from '../../../../lib/getURLs'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Grid } from '@material-ui/core'

interface IProps {
    removeMemberAction: (payload: {
        id?: string | null
        account?: string | null
    }) => void
    userId: string
    data: ICommunity[]
}

const TableComp: React.FunctionComponent<IProps> = props => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Role</TableCell>
                    <TableCell>Community Name</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data &&
                    props.data.map(({ community }) => {
                        const currentCommunityUser = community.members.find(
                            ({ id }) => id === props.userId
                        )
                        let currentCommunityUserRole = ''
                        if (community.members && currentCommunityUser) {
                            currentCommunityUserRole = currentCommunityUser.role
                        }

                        return (
                            <TableRow key={community.id}>
                                <TableCell>
                                    <Label>{currentCommunityUserRole}</Label>
                                </TableCell>
                                <TableCell>
                                    <Label>{community.name}</Label>
                                </TableCell>
                                <TableCell>
                                    <Grid
                                        container={true}
                                        justify="space-around"
                                    >
                                        <Grid item={true}>
                                            <Label
                                                onClick={() =>
                                                    props.removeMemberAction({
                                                        account: props.userId,
                                                        id: community.id,
                                                    })
                                                }
                                                hoverColor={'hoverTextColor'}
                                            >
                                                Leave Community
                                            </Label>
                                        </Grid>
                                        <Grid item={true}>
                                            <Link
                                                href={
                                                    getCommunityURL(community)
                                                        .href
                                                }
                                            >
                                                <a>
                                                    <Label
                                                        hoverColor={
                                                            'hoverTextColor'
                                                        }
                                                    >
                                                        View Community
                                                    </Label>
                                                </a>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        )
                    })}
            </TableBody>
        </Table>
    )
}

export default TableComp
