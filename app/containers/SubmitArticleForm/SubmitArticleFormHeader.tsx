import React from 'react'
import { IAttributesPayload } from './Module'
import TagSelector from '../../components/TagSelector'
import { Grid, TextField } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import Image from '../../components/Image'

interface IProps {
    getFieldValue: (field: string) => any
    getFieldDecorator: (arg0: string, arg1: any) => any
    getFieldError: (err: string) => string[]
    setFieldsValue: (err: string) => string[]
    status?: string
    subject?: string
    attributes?: IAttributesPayload
    tags: string[]
}

const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault()
    }
}

const getBG = (
    getFieldValue: (field: string) => any,
    attributes?: IAttributesPayload
) => {
    const formValue = getFieldValue('attributes')
    console.log(formValue)
    if (formValue && typeof formValue.background === 'string') {
        return formValue.background
    }
    if (attributes && attributes.background) {
        return attributes.background
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.common.black,
        position: 'relative',
    },
    container: {
        maxWidth: 1232,
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

export default ({
    getFieldError,
    getFieldDecorator,
    subject,
    tags,
    getFieldValue,
    setFieldsValue,
    attributes,
}: IProps) => {
    const classes = useStyles()
    const bg = getBG(getFieldValue, attributes)
    return (
        <Grid className={classes.root}>
            {bg && (
                <Image
                    width="100%"
                    height="100%"
                    image={bg}
                    asBackground={true}
                    overlay={{
                        color: '#000',
                        opacity: 0.8,
                    }}
                />
            )}
            {getFieldDecorator('attributes', {
                initialValue: {},
            })(<div />)}
            <Grid className={classes.container}>
                {getFieldDecorator('subject', {
                    initialValue: subject,
                    rules: [
                        {
                            max: 150,
                            message: 'Please input the subject of the article!',
                            required: true,
                            whitespace: true,
                        },
                    ],
                })(
                    <TextField
                        onKeyPress={handleKeyPress}
                        placeholder="Add Article Title"
                        error={
                            getFieldError('subject') &&
                            getFieldError('subject').length > 0
                        }
                        style={{
                            alignSelf: 'flex-start',
                            width: '100%',
                        }}
                        InputProps={{
                            className: classes.titleInput,
                        }}
                    />
                )}
                <TagSelector
                    tags={tags}
                    setFieldsValue={setFieldsValue}
                    getFieldDecorator={getFieldDecorator}
                />
            </Grid>
        </Grid>
    )
}
