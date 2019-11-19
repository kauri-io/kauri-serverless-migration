import { useState } from 'react'
import Button from '../Button'
import { Typography, TextField, Grid } from '@material-ui/core'

export default ({ classes, closeModalAction, format, type }) => {
    const [url, setURL] = useState('')
    const [text, setText] = useState('')
    return (
        <div className={classes.urlContainer}>
            {type === 'url' && <Typography variant="h6">Add Hyperlink</Typography>}
            {type === 'youtube' && <Typography variant="h6">Add Youtube URL</Typography>}
            <TextField
                onChange={e => setURL(e.target.value)}
                margin="normal"
                label="URL"
            />
            {type !== 'youtube' && <TextField
                onChange={e => setText(e.target.value)}
                margin="normal"
                label="Text"
            />}
            <Grid spacing={3} container={true}>
                <Grid item={true} sm={6}>
                    <Button
                        fullWidth={true}
                        variant="outlined"
                        color="primary"
                        onClick={closeModalAction}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item={true} sm={6}>
                    <Button
                        fullWidth={true}
                        onClick={() => {
                            if (type === 'url') {
                                format('link', url, text)
                            } else if (type === 'youtube') {
                                format('youtube', url )
                            }
                            closeModalAction()
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
