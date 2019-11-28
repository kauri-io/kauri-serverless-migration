import Stack from 'stack-styled'
import { Field, FieldProps } from 'formik'
import { space } from 'styled-system'
import styled from 'styled-components'
import PrimaryHeaderSection from '../../components/Section/PrimaryHeaderSection'
import { Label } from '../../components/Typography'
import UploadLogoButtonComponent from '../../components/Button/UploadLogoButton'
import AddMemberButtonComponent from '../../components/Button/AddMemberButton'
import TextField from '@material-ui/core/TextField'
import Avatar from '../../components/Avatar'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import SocialWebsiteIcon from '../../components/Social/SocialWebsiteIcon'
import { IFormValues } from './index'
import TagSelector from '../../components/TagSelector'
import { Theme, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import ValidatedTextField from '../../components/ValidatedTextField'

const useStyles = makeStyles((theme: Theme) => ({
    input: {
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
    inputLong: {
        width: '680px',
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
    socialIcon: {
        marginTop: theme.spacing(1),
    },
}))

const LeftSide = styled.section`
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    > *:nth-last-child(2) {
        margin-top: ${props => props.theme.space[2]}px;
    }
`

interface ICreateCommunityDetails {
    mr: number
}
const CreateCommunityDetails = styled('div')<ICreateCommunityDetails>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${space};
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const CreateCommunityMembersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > *:not(:last-child) {
        margin-right: ${props => props.theme.space[1]}px;
    }
    > *:nth-last-child(2) {
        width: unset;
    }
`

const MainDetails = styled.div`
    display: flex;
    align-items: flex-end;
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const MainFields = styled.div`
    display: flex;
    flex-direction: column;
    > :first-child {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const SocialFieldContainer = styled.div`
    display: flex;
    > :first-child {
        margin-right: ${props => props.theme.space[2]}px;
    }
`

interface IProps {
    avatar: null | undefined | string
    uploadLogo: () => void
    background: undefined | string
    tags: Array<string | null> | null
    setFieldValue: (field: string, value: any) => void
    userId: string
    userAvatar: string | null
    openAddMemberModal: () => void
    username: string | null
    errors: any
}

const Component: React.SFC<IProps> = props => {
    const classes = useStyles()

    const [validationMessages, setValidationMessages] = React.useState({})

    const validate = (
        name: string,
        value: string,
        maxLength: number,
        regex: RegExp
    ) => {
        if (value && !regex.test(value)) {
            return name + ' is incorect'
        }
        if (value && value.length > maxLength) {
            return name + ' longer than ' + maxLength + ' characters'
        }
        return ''
    }

    const onValidation = (id, message) => {
        if (!message || message == '') {
            delete validationMessages[id]
            return
        }
        validationMessages[id] = message
        setValidationMessages(validationMessages)
    }

    return (
        <PrimaryHeaderSection backgroundURL={props.background}>
            <LeftSide>
                <MainDetails>
                    <UploadLogoButtonComponent
                        callback={url => props.setFieldValue('avatar', url)}
                        bg={String(props.avatar)}
                        text="Logo"
                        color="white"
                        hasError={props.errors.avatar}
                    />

                    <MainFields>
                        <Field
                            type="text"
                            name="name"
                            render={({ field }: FieldProps<IFormValues>) => (
                                <ValidatedTextField
                                    id="name"
                                    field={field}
                                    multiline={true}
                                    rowsMax="3"
                                    placeholder="Community Name"
                                    InputProps={{
                                        className: classes.inputLong,
                                    }}
                                    margin="normal"
                                    validate={value =>
                                        validate('name', value, 100, /.*/)
                                    }
                                    required={true}
                                    onValidation={onValidation}
                                    value={field.value}
                                />
                            )}
                        />

                        <Field
                            type="text"
                            name="website"
                            render={({ field }: FieldProps<IFormValues>) => (
                                <ValidatedTextField
                                    id="website"
                                    field={field}
                                    placeholder="Website"
                                    InputProps={{
                                        className: classes.inputLong,
                                    }}
                                    margin="normal"
                                    validate={value =>
                                        validate(
                                            'website',
                                            value,
                                            100,
                                            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
                                        )
                                    }
                                    required={false}
                                    onValidation={onValidation}
                                    value={field.value}
                                />
                            )}
                        />
                    </MainFields>
                </MainDetails>
                <Field
                    type="text"
                    name="description"
                    render={({ field }: FieldProps<IFormValues>) => (
                        <ValidatedTextField
                            id="description"
                            field={field}
                            multiline={true}
                            rowsMax="3"
                            placeholder="Add description"
                            InputProps={{
                                className: classes.input,
                            }}
                            margin="normal"
                            validate={value =>
                                validate('description', value, 250, /.*/)
                            }
                            required={true}
                            onValidation={onValidation}
                            value={field.value}
                        />
                    )}
                />

                <TagSelector
                    maxTags={7}
                    tags={props.tags || []}
                    updateTags={(tags: string[]) =>
                        props.setFieldValue('tags', tags)
                    }
                />

                <SocialFieldContainer>
                    <SocialWebsiteIcon
                        brand={'twitter'}
                        className={classes.socialIcon}
                    />
                    <Field
                        type="text"
                        name="social.twitter"
                        render={({ field }: FieldProps<IFormValues>) => (
                            <TextField
                                InputProps={{
                                    className: classes.input,
                                }}
                                {...field}
                                placeholder={'Twitter'}
                            />
                        )}
                    />
                </SocialFieldContainer>

                <SocialFieldContainer>
                    <SocialWebsiteIcon
                        brand={'github'}
                        className={classes.socialIcon}
                    />
                    <Field
                        type="text"
                        name="social.github"
                        render={({ field }: FieldProps<IFormValues>) => (
                            <TextField
                                InputProps={{
                                    className: classes.input,
                                }}
                                {...field}
                                placeholder={'Github'}
                            />
                        )}
                    />
                </SocialFieldContainer>
            </LeftSide>
            <Stack
                gridAutoFlow={['row']}
                alignItems={['', 'center']}
                justifyContent={['', 'end']}
                gap={0}
            >
                <CreateCommunityDetails mr={4}>
                    <StatisticsContainer
                        pageType={'CreateCommunityPage'}
                        statistics={[
                            { name: 'Articles', count: 0 },
                            { name: 'Collections', count: 0 },
                        ]}
                    />
                    <Label textAlign="center" color="white">
                        Moderators
                    </Label>
                    <CreateCommunityMembersContainer>
                        <Avatar
                            color="secondary"
                            username={props.username}
                            id={props.userId}
                            avatar={props.userAvatar}
                            withName={true}
                        />
                        <AddMemberButtonComponent
                            onClick={() => props.openAddMemberModal()}
                        />
                    </CreateCommunityMembersContainer>
                </CreateCommunityDetails>
            </Stack>
        </PrimaryHeaderSection>
    )
}

export default Component
