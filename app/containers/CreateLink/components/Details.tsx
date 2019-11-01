import { Grid, TextField } from '@material-ui/core'
import TagSelector from './TagSelector'

const Details = ({ authorName }) => (
    <Grid>
        <Grid justify="space-between" container={true}>
            <TextField value={authorName} disabled={authorName ? true : false} label="Author Name" />
            <TextField label="Author Twitter" />
            <TextField label="Author Linkedin" />
        </Grid>
        <TagSelector />
    </Grid>
)

export default Details
