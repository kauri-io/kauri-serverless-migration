import { TextField } from '@material-ui/core'
import { useState } from 'react'
import isUrl from 'is-url'

export default ({ attributes, setAttributes, onValidationError }) => {
    const [error, setError] = useState('')

    const validate = canonicalValue => {
        let err = ''
        if (canonicalValue && !isUrl(canonicalValue)) {
            err = 'Not a valid canonical url'
        }

        setError(err)
        if (onValidationError) {
            onValidationError(err)
        }
    }

    return (
        <TextField
            onChange={e => {
                validate(e.target.value)
                setAttributes({
                    background: attributes.background,
                    canonical: e.target.value,
                })
            }}
            value={attributes.canonical}
            error={error.length === 0 ? false : true}
            label="canonical url"
        />
    )
}
