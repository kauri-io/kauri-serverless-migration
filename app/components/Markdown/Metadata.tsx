import { TextField } from '@material-ui/core'

export default ({ attributes, setAttributes }) => {
    return (
        <TextField
            onChange={e =>
                setAttributes({
                    background: attributes.background,
                    canonical: e.target.value,
                })
            }
            value={attributes.canonical}
            label="canonical url"
        />
    )
}
