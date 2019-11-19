import { Grid, TextField, makeStyles, Theme } from '@material-ui/core'
import TagSelector from '../../../components/TagSelector'

export default ({ title, setTitle, tags, setTags }) => {
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            background: theme.palette.common.black,
            width: '100%',
        },
        container: {
            maxWidth: 1272,
            width: '100%',
            padding: theme.spacing(2, 0),
            margin: 'auto',
        },
        titleInput: {
            margin: theme.spacing(2, 0),
            fontSize: 32,
            color: theme.palette.common.white,
            '&:hover': {
                '&:before': {
                    borderBottomColor: 'rgba(255,255,255,0.6) !important',
                },
            },
            '&:before': {
                borderBottomColor: 'rgba(255,255,255,0.3)',
            },
        },
    }))
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid className={classes.container}>
                <TextField
                    InputProps={{
                        className: classes.titleInput,
                    }}
                    placeholder="Add Article Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TagSelector updateTags={setTags} tags={tags} />
            </Grid>
        </div>
    )
}
