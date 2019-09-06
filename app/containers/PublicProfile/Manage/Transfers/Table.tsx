import Link from '../../../../components/Link'
import { getProfileURL, getArticleURL } from '../../../../lib/getURLs'
import {
    TableRow,
    TableCell,
    Typography,
    TableHead,
    TableBody,
} from '@material-ui/core'

const Table = props => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography>Status</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>Sent By</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>Article Name</Typography>
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data &&
                    props.data.map(i => {
                        const articleUrl = getArticleURL(i.article)
                        const ownerUrl = getProfileURL(i.article.owner)
                        return (
                            <TableRow key={i.id}>
                                <TableCell>
                                    <Typography>Pending</Typography>
                                </TableCell>
                                <TableCell>
                                    <Link
                                        href={ownerUrl.href}
                                        as={ownerUrl.href}
                                    >
                                        <Typography>
                                            {i.article.owner.name ||
                                                i.article.owner.username ||
                                                i.article.owner.id}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link
                                        href={articleUrl.href}
                                        as={articleUrl.as}
                                    >
                                        <Typography>
                                            {i.article.title}
                                        </Typography>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        onClick={() =>
                                            props.acceptArticleTransferAction({
                                                id: i.id,
                                            })
                                        }
                                    >
                                        Accept
                                    </Typography>
                                    <Typography
                                        onClick={() =>
                                            props.rejectArticleTransferAction({
                                                id: i.id,
                                            })
                                        }
                                    >
                                        Reject
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )
                    })}
            </TableBody>
        </Table>
    )
}

export default Table
