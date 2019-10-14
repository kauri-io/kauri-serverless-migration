import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { useState } from 'react'
import { requestParsedUrl } from './Module'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import { Typography, makeStyles, Theme } from '@material-ui/core'


export default ({ onFetch }) => {
    const [url, setUrl] = useState()
    const [loading, setLoading] = useState(false)

    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            margin: theme.spacing(2, 0),
            flexDirection: 'column'
        },
        field: {
            marginRight: theme.spacing(2),
            flex: 1,
        }
    }))
    const classes = useStyles()

    if (loading) {
        return <Loading />
    }

    return <Grid container={true} className={classes.container}>
        <Grid><Typography>Please enter the url of the article you would like to import here.</Typography></Grid>
        <Grid container={true}>
            <TextField placeholder='http://www.mysite.com/article/article-title' className={classes.field} onChange={e => setUrl(e.target.value)} />
            <Button
                color="primary"
                variant="contained"
                onClick={async () => {
                    setLoading(true)
                    const data = await requestParsedUrl(url)
                    onFetch(data.md)
                    setLoading(false)
                }}
            >
                    Import
            </Button>
        </Grid> 

    </Grid>
}