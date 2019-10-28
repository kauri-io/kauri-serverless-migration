import TextField from '@material-ui/core/TextField'
import { useStyles } from '../styles'
import { debounce } from '../../../lib/debounce'
import { extractLinkMetadata } from '../../../queries/Link'

const debouncedFetch = debounce(async (url, client, setData, setLoading) => {
    if (url) {
        setLoading(true)
        // reset  data
        setData({
            title: null,
            description: null,
            image: null
        })
        const data = await client.query({
            query: extractLinkMetadata,
            variables: {
                url,
            },
        })
        setData(data.data.extractLinkMetadata)
        setLoading(false)
    }
}, 200)

const LinkInput = ({ client, setData, setLoading }) => {
    const classes = useStyles({})
    return (
        <TextField
            label="Add external link"
            className={classes.linkInput}
            fullWidth={true}
            placeholder="Add external link"
            multiline={true}
            onChange={e =>
                debouncedFetch(e.target.value, client, setData, setLoading)
            }
        />
    )
}
export default LinkInput
