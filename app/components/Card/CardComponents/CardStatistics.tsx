import { Typography, Icon } from '@material-ui/core'

export default ({ articleCount }) => {
    return (
        <>
            <Icon>insert_drive_file</Icon>
            <Typography variant="subtitle1">{articleCount}</Typography>
        </>
    )
}
