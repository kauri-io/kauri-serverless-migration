import { IInvitation } from './ManageMembers/FormInviteMembersPanel'
import { getCommunity } from '../../queries/__generated__/getCommunity'
import { IFormValues } from './index'
import HomepageContentField from './Homepage/HomepageContentField'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import { Tabs, Tab } from '@material-ui/core'
import { useState } from 'react'

import { makeStyles, Theme } from '@material-ui/core/styles'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import HomeContentSectionEmptyState from './ContentSectionEmptyStates/HomeContentSectionEmptyState'

const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}))

// const DisplayFormikState = (props: any) => (
//   <div style={{ margin: "1rem 0", background: "#f6f8fa", padding: ".5rem" }}>
//     <strong>Injected Formik props (the form's state)</strong>
//     <div>
//       <code>errors:</code> {JSON.stringify(props.errors, null, 2)}
//     </div>
//     <div>
//       <code>values:</code> {JSON.stringify(props.values, null, 2)}
//     </div>
//     <div>
//       <code>isSubmitting:</code> {JSON.stringify(props.isSubmitting, null, 2)}
//     </div>
//   </div>
// );
interface IProps {
    openAddMemberModal: () => void
    routeChangeAction: typeof routeChangeAction
    id: string | null
    cancelInvitation: (payload: { index: number }) => void
    formInvitations: IInvitation[] | null | undefined
    data: getCommunity | null
    isCommunityAdmin: boolean
    setFieldValue: (field: string, value: any) => void
    values: IFormValues
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    disabled?: boolean
}

const HomePanel = props =>
    props.isCommunityAdmin ? (
        <HomepageContentField
            id={String(props.id)}
            openModalAction={props.openModalAction}
            closeModalAction={props.closeModalAction}
            values={props.values}
        />
    ) : (
        <HomeContentSectionEmptyState key="home" />
    )

const Component: React.SFC<IProps> = props => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    return (
        <div>
            <Tabs
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                className={classes.tabs}
                centered={true}
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="Home" disabled={props.disabled} />
                <Tab label="Articles" disabled={props.disabled} />
                <Tab label="Collections" disabled={props.disabled} />
                <Tab label="Manage Community" disabled={props.disabled} />
            </Tabs>
            {tab === 0 && <HomePanel {...props} />}
        </div>
    )
}

export default Component
