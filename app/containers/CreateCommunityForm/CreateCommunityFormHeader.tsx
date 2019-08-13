import Stack from 'stack-styled'
import { Field, FieldProps } from 'formik'
import { space } from 'styled-system'
import styled from 'styled-components'
import PrimaryHeaderSection from '../../components/Section/PrimaryHeaderSection'
import { Label } from '../../components/Typography'
import UploadLogoButtonComponent from '../../components/Button/UploadLogoButton'
import AddMemberButtonComponent from '../../components/Button/AddMemberButton'
import TextField from '@material-ui/core/TextField'
import UserAvatarComponent from '../../components/UserAvatar'
import StatisticsContainer from '../../components/PublicProfile/StatisticsContainer'
import SocialWebsiteIcon from '../../components/PublicProfile/SocialWebsiteIcon'
import { IFormValues } from './index'
import TagSelector from '../../components/TagSelector'

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

const Component: React.SFC<IProps> = props => (
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
                            />
                        )}
                    />

                    <Field
                        type="text"
                        name="website"
                        render={({ field }: FieldProps<IFormValues>) => (
                            <TextField {...field} placeholder={'Website'} />
                        )}
                    />
                </MainFields>
            </MainDetails>
            <Field
                type="text"
                name="description"
                render={({ field }: FieldProps<IFormValues>) => (
                    <TextField {...field} placeholder={'Add description'} />
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
                        <TextField {...field} placeholder={'Twitter'} />
                    )}
                />
            </SocialFieldContainer>

            <SocialFieldContainer>
                <SocialWebsiteIcon brand={'github'} />
                <Field
                    type="text"
                    name="social.github"
                    render={({ field }: FieldProps<IFormValues>) => (
                        <TextField {...field} placeholder={'Github'} />
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
                    <UserAvatarComponent
                        fullWidth={true}
                        variant="white"
                        username={props.username}
                        userId={props.userId}
                        avatar={props.userAvatar}
                    />
                    <AddMemberButtonComponent
                        onClick={() => props.openAddMemberModal()}
                    />
                </CreateCommunityMembersContainer>
            </CreateCommunityDetails>
        </Stack>
    </PrimaryHeaderSection>
)

export default Component
