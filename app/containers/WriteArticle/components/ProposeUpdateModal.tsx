import React from 'react'
import {
    Grid,
    Typography,
    makeStyles,
    Theme,
    TextField,
} from '@material-ui/core'
import { IField } from '../../CreateCommunityForm/AddMemberModal'
import AlertViewComponent from '../../../components/Modal/AlertView'

const useStyles = makeStyles((_theme: Theme) => ({
    input: {
        width: '100%',
    },
}))

interface IProps {
    closeModalAction: () => void
    handleSubmit: any
}

const ProposeArticleModal: React.FunctionComponent<IProps> = props => {
    const [updateComment, setUpdateComment] = React.useState<IField>({
        value: '',
        hasError: false,
        handleChange: (value: string) => {
            setUpdateComment({
                ...updateComment,
                value,
                hasError: !updateComment.validate(value),
            })
        },
        validate: (value: string) => {
            return value.length > 3
        },
    })

    return (
        <AlertViewComponent
            title="Submit Update"
            closeModalAction={props.closeModalAction}
            content={
                <ProposeArticleContentModal updateComment={updateComment} />
            }
            confirmButtonAction={e => {
                let hasError = false
                if (!updateComment.validate(updateComment.value)) {
                    setUpdateComment({ ...updateComment, hasError: true })
                    hasError = true
                }

                if (hasError) return

                return props.handleSubmit('submit/update', updateComment.value)(
                    e
                )
            }}
        />
    )
}

interface IPropsContent {
    updateComment: IField
}

const ProposeArticleContentModal: React.FunctionComponent<IPropsContent> = ({
    updateComment,
}: IPropsContent) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Typography variant="body1">
                Please enter a note to the author explaining your changes. At a
                minimum, describe what you've changed. Adding detail will
                greatly increase the likelihood the author will accept and
                publish your proposed update!
            </Typography>

            <TextField
                name="updateComment"
                margin="dense"
                placeholder="Comment"
                error={updateComment.hasError}
                helperText={updateComment.hasError ? 'Comment is required' : ''}
                onChange={e => updateComment.handleChange(e.target.value)}
                className={classes.input}
                value={updateComment.value}
            />
        </Grid>
    )
}

export default ProposeArticleModal
