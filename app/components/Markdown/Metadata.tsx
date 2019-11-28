import { isUrl } from '../../lib/is-url'
import ValidatedTextField from '../ValidatedTextField'
import { makeStyles } from '@material-ui/styles'

export default ({ attributes, setAttributes, onValidation }) => {
    const useStyles = makeStyles(() => ({
        canonical: {
            width: '50%',
        },
    }))
    const classes = useStyles()

    const validate = (canonicalValue: string) => {
        if (canonicalValue && !isUrl(canonicalValue)) {
            return 'Not a valid canonical url'
        }

        return ''
    }

    return (
        <ValidatedTextField
            id="canonical"
            className={classes.canonical}
            handleChange={e => {
                validate(e.target.value)
                setAttributes({
                    background: attributes.background,
                    canonical: e.target.value,
                })
            }}
            value={attributes.canonical}
            label="canonical url"
            validate={validate}
            onValidation={onValidation}
        />
    )
}
