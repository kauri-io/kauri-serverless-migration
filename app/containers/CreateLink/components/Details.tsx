import { Grid, TextField } from '@material-ui/core'
import TagSelector from './TagSelector'
import { useState } from 'react'

const Details = ({
    authorName,
    setAuthorName,
    authorSocial,
    setAuthorSocial,
    client,
    setTags,
    tags,
}) => {
    const [authorNameReadonly] = useState(authorName)
    const [authorTwitterReadonly] = useState(
        authorSocial && authorSocial.twitter
    )
    const [authorLinkedinReadonly] = useState(
        authorSocial && authorSocial.linkedin
    )

    const updateAuthorSocial = (field, value) => {
        let updatedSocial = { ...authorSocial }

        updatedSocial[field] = value
        setAuthorSocial(updatedSocial)
    }

    return (
        <Grid>
            <Grid justify="space-between" container={true}>
                <TextField
                    value={authorName}
                    required={true}
                    disabled={authorNameReadonly}
                    onChange={e => setAuthorName(e.target.value)}
                    label="Author Name"
                />

                <TextField
                    disabled={authorTwitterReadonly}
                    value={authorSocial && authorSocial.twitter}
                    onChange={e =>
                        updateAuthorSocial('twitter', e.target.value)
                    }
                    label="Author Twitter"
                />
                <TextField
                    disabled={authorLinkedinReadonly}
                    value={authorSocial && authorSocial.linkedin}
                    onChange={e =>
                        updateAuthorSocial('linkedin', e.target.value)
                    }
                    label="Author Linkedin"
                />
            </Grid>
            <TagSelector tags={tags} setTags={setTags} client={client} />
        </Grid>
    )
}

export default Details
