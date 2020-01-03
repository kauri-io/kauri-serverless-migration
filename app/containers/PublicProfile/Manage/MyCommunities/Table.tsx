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
import {
    leaveCommunityAction,
    removeGrantedMemberAction,
} from '../../../Community/Module'

interface IProps {
    removeGrantedMemberAction: typeof removeGrantedMemberAction
    leaveCommunityAction: typeof leaveCommunityAction
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
                    props.data.map(({ role, community }) => {
                        return (
                            <TableRow key={community.id}>
                                <TableCell>
                                    <Label>{role}</Label>
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
                                                onClick={() => {
                                                    if (
                                                        role === 'ADMIN' ||
                                                        role === 'CURATOR'
                                                    ) {
                                                        return props.removeGrantedMemberAction(
                                                            {
                                                                account:
                                                                    props.userId,
                                                                id:
                                                                    community.id,
                                                            }
                                                        )
                                                    } else if (
                                                        role === 'BASIC'
                                                    ) {
                                                        return props.leaveCommunityAction(
                                                            {
                                                                id:
                                                                    community.id,
                                                            }
                                                        )
                                                    } else {
                                                        //do nothing
                                                    }
                                                }}
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
