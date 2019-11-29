import { Grid, makeStyles, Theme } from '@material-ui/core'
import TagSelector from '../../../components/TagSelector'
import ValidatedTextField from '../../../components/ValidatedTextField'

export default ({ title, setTitle, tags, setTags, onValidation }) => {
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
        titleContainer: {
            width: '60%',
        },
    }))
    const classes = useStyles()

    const validateTitle = title => {
        if (title && title.length > 100) {
            return 'Title longer than 100 characters'
        }

        return ''
    }

    return (
        <div className={classes.root}>
            <Grid className={classes.container}>
                <ValidatedTextField
                    className={classes.titleContainer}
                    id="title"
                    InputProps={{
                        className: classes.titleInput,
                    }}
                    placeholder="Add Article Title"
                    required={true}
                    value={title}
                    handleChange={e => setTitle(e.target.value)}
                    onValidation={onValidation}
                    validate={validateTitle}
                    rowsMax={2}
                />

                <TagSelector updateTags={setTags} tags={tags} />
            </Grid>
        </div>
    )
}
