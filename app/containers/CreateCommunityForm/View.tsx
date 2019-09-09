import styled from 'styled-components'
import Actions from './CreateCommunityFormActions'
import Header from './CreateCommunityFormHeader'
import Content from './CreateCommunityFormContent'
import { showNotificationAction as showNotification } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { createCommunityAction, updateCommunityAction } from './Module'
import { Form, InjectedFormikProps } from 'formik'
import Head from 'next/head'
import { IFormValues } from './index'
import { getCommunity } from '../../queries/__generated__/getCommunity'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import AddMemberModal from './AddMemberModal'
import { remove } from 'ramda'
import { accountCheck } from '../../lib/accountCheck'

export interface IProps {
    id: string | null
    routeChangeAction: typeof routeChangeAction
    createCommunityAction: typeof createCommunityAction
    updateCommunityAction: typeof updateCommunityAction
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    data: getCommunity | null
    userId: string
    userAvatar: string | null
    username: string | null
    validateForm: () => Promise<any>
    showNotificationAction: typeof showNotification
    isCommunityAdmin: boolean
}

const DisplayFormikState = props => (
    <div style={{ margin: '1rem 0', background: '#f6f8fa', padding: '.5rem' }}>
        <strong>Injected Formik props (the form's state)</strong>
        <div>
            <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
        </div>
        <div>
            <code>values:</code> {JSON.stringify(props.values, null, 2)}
        </div>
    </div>
)

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

const Component: React.SFC<
    InjectedFormikProps<IProps, IFormValues>
> = props => {
    if (process.browser && !accountCheck()) {
        props.routeChangeAction(
            `/account-check?page=${window.location.pathname}`
        )
    }

    const openAddMemberModal = () =>
        props.openModalAction({
            children: (
                <AddMemberModal
                    showNotificationAction={props.showNotificationAction}
                    confirmButtonAction={(invitation: any) => {
                        props.setFieldValue(
                            'invitations',
                            (props.values as any).invitations.concat(invitation)
                        )
                        props.closeModalAction()
                    }}
                    closeModalAction={props.closeModalAction}
                />
            ),
        })

    const cancelInvitation = ({ index }: { index: number }) =>
        props.setFieldValue(
            'invitations',
            (props.values.invitations &&
                remove(index, 1, props.values.invitations)) ||
                []
        )

    return (
        <Section>
            <Form>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://transloadit.edgly.net/releases/uppy/v0.24.3/dist/uppy.min.css"
                    />
                </Head>

                <Actions
                    setFieldValue={props.setFieldValue}
                    showNotificationAction={props.showNotificationAction}
                    validateForm={props.validateForm}
                    id={props.id}
                    goBack={() => props.routeChangeAction(`back`)}
                    setupImageUploader={console.log}
                    isSubmitting={props.isSubmitting}
                    background={
                        props.values.attributes &&
                        props.values.attributes.background
                    }
                />
                {console.log('PROPS: ', props)}
                <Header
                    {...props.values}
                    userId={props.userId}
                    userAvatar={props.userAvatar}
                    username={props.username}
                    tags={props.values.tags || []}
                    avatar={props.values.avatar}
                    background={
                        props.values.attributes &&
                        props.values.attributes.background
                    }
                    openAddMemberModal={openAddMemberModal}
                    uploadLogo={console.log}
                    setFieldValue={props.setFieldValue}
                />
                <Content
                    {...props}
                    openAddMemberModal={openAddMemberModal}
                    cancelInvitation={cancelInvitation}
                    formInvitations={props.values.invitations}
                    isCommunityAdmin={props.isCommunityAdmin}
                    setFieldValue={props.setFieldValue}
                />
                {process.env.NODE_ENV !== 'production' && (
                    <DisplayFormikState
                        touched={props.touched}
                        errors={props.errors}
                        values={props.values}
                    />
                )}
            </Form>
        </Section>
    )
}

export default Component
