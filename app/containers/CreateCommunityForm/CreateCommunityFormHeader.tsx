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
}

const Component: React.SFC<IProps> = props => {
    const classes = useStyles()
    return (
        <PrimaryHeaderSection backgroundURL={props.background}>
            <LeftSide>
                <MainDetails>
                    <UploadLogoButtonComponent
                        callback={url => props.setFieldValue('avatar', url)}
                        bg={String(props.avatar)}
                        text="Logo"
                        color="white"
                    />

                    <MainFields>
                        <Field
                            type="text"
                            name="name"
                            render={({ field }: FieldProps<IFormValues>) => (
                                <TextField
                                    {...field}
                                    placeholder={'Community Name'}
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                />
                            )}
                        />

                        <Field
                            type="text"
                            name="website"
                            render={({ field }: FieldProps<IFormValues>) => (
                                <TextField
                                    {...field}
                                    placeholder={'Website'}
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                />
                            )}
                        />
                    </MainFields>
                </MainDetails>
                <Field
                    type="text"
                    name="description"
                    render={({ field }: FieldProps<IFormValues>) => (
                        <TextField
                            {...field}
                            placeholder={'Add description'}
                            InputProps={{
                                className: classes.input,
                            }}
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
                    <SocialWebsiteIcon brand={'twitter'} />
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
                    <SocialWebsiteIcon brand={'github'} />
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
