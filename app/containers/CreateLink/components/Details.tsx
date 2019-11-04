import { Grid, TextField } from '@material-ui/core'
import TagSelector from './TagSelector'

const Details = ({ authorName, authorSocial, client, setTags, tags }) => (
    <Grid>
        <Grid justify="space-between" container={true}>
            <TextField
                value={authorName}
                disabled={authorName ? true : false}
                label="Author Name"
            />
            <TextField
                disabled={authorSocial && authorSocial.twitter ? true : false}
                value={authorSocial && authorSocial.twitter}
                label="Author Twitter"
            />
            <TextField
                disabled={authorSocial && authorSocial.linkedin ? true : false}
                value={authorSocial && authorSocial.linkedin}
                label="Author Linkedin"
            />
        </Grid>
        <TagSelector tags={tags} setTags={setTags} client={client} />
    </Grid>
)

export default Details
