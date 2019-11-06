import TextField from '@material-ui/core/TextField'
import { useStyles } from '../styles'
import { debounce } from '../../../lib/debounce'
import { extractLinkMetadata } from '../../../queries/Link'
import { useState } from 'react'

const debouncedFetch = debounce(
    async (url, client, setData, setLoading, setError) => {
        if (url) {
            setLoading(true)
            setError(false)
            // reset  data
            setData({
                title: null,
                description: null,
                image: null,
            })
            try {
                const data = await client.query({
                    query: extractLinkMetadata,
                    variables: {
                        url,
                    },
                })
                setData({ ...data.data.extractLinkMetadata, url })
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
            }
        }
    },
    200
)

const LinkInput = ({ client, setData, setLoading }) => {
    const [error, setError] = useState(false)
    const classes = useStyles({})
    return (
        <TextField
            label={error ? 'Invalid url' : 'Add external link'}
            className={classes.linkInput}
            fullWidth={true}
            placeholder="Add external link"
            multiline={true}
            error={error}
            onChange={e =>
                debouncedFetch(
                    e.target.value,
                    client,
                    setData,
                    setLoading,
                    setError
                )
            }
        />
    )
}
export default LinkInput
