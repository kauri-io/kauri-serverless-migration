import { Typography, Icon } from '@material-ui/core'

const CardStatistics = ({ articleCount }) => {
    return (
        <>
            <Icon>insert_drive_file</Icon>
            <Typography variant="subtitle2">{articleCount}</Typography>
        </>
    )
}

export default CardStatistics
