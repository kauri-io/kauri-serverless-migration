import { combineEpics } from 'redux-observable'
import userDetailsEpic from './Epics/FetchUserDetailsEpic'
import routeChangeEpic from './Epics/RouteChangeEpic'
import app from './Module'
import register, { registerEpic } from '../containers/LoginForm/Module'
import modal from '../components/Modal/Module'
import {
    rejectArticleEpic,
    approveArticleEpic,
} from '../containers/ArticleReview/Module'
import { publishArticleEpic } from '../containers/WriteArticle/PublishArticleModule'
import {
    submitArticleEpic,
    submitArticleVersionEpic,
    editArticleEpic,
    draftArticleEpic,
} from '../containers/WriteArticle/Module'
import { checkpointArticlesEpic } from '../containers/CheckpointArticles/Module'
import {
    createCollectionEpic,
    editCollectionEpic,
    composeCollectionEpic,
} from '../containers/CreateCollectionForm/Module'
import { deleteDraftArticleEpic } from '../containers/ArticleDraft/DeleteDraftArticleModule'
import {
    verifyEmailEpic,
    resendEmailVerificationEpic,
    emailSubscribeEpic,
} from '../containers/EmailVerification/Module'
import { voteEpic } from '../containers/Article/Module'
import {
    createCommunityEpic,
    communityCreatedEpic,
    updateCommunityEpic,
} from '../containers/CreateCommunityForm/Module'
import {
    curateCommunityResourcesEpic,
    approveResourceEpic,
    sendCommunityInvitationEpic,
    acceptCommunityInvitationEpic,
    waitForInvitationReconciliationEpic,
    removeMemberEpic,
    removeResourceEpic,
    changeMemberRoleEpic,
    revokeInvitationEpic,
    resendInvitationEpic,
    transferArticleToCommunityEpic,
} from '../containers/Community/Module'
import {
    rejectArticleTransferEpic,
    acceptArticleTransferEpic,
    finaliseArticleTransferEpic,
} from '../containers/PublicProfile/Manage/TransferModule'
import { saveUserDetailsEpic } from '../components/EditProfileForm/Module'
import { addCommentEpic } from '../containers/Article/Module'
import {
    addArticleToCollectionEpic,
    openAddArticleToCollectionConfirmationModalEpic,
} from '../containers/AddToCollection/Module'

export const rootReducer = {
    app,
    modal,
    register,
}

const epics = [
    registerEpic,
    routeChangeEpic,
    userDetailsEpic,
    verifyEmailEpic,
    resendEmailVerificationEpic,
    emailSubscribeEpic,
    rejectArticleEpic,
    approveArticleEpic,
    submitArticleEpic,
    submitArticleVersionEpic,
    editArticleEpic,
    draftArticleEpic,
    publishArticleEpic,
    checkpointArticlesEpic,
    deleteDraftArticleEpic,
    createCollectionEpic,
    editCollectionEpic,
    composeCollectionEpic,
    voteEpic,
    rejectArticleTransferEpic,
    acceptArticleTransferEpic,
    finaliseArticleTransferEpic,
    transferArticleToCommunityEpic,
    resendInvitationEpic,
    changeMemberRoleEpic,
    approveResourceEpic,
    removeResourceEpic,
    revokeInvitationEpic,
    removeMemberEpic,
    acceptCommunityInvitationEpic,
    waitForInvitationReconciliationEpic,
    sendCommunityInvitationEpic,
    curateCommunityResourcesEpic,
    communityCreatedEpic,
    updateCommunityEpic,
    createCommunityEpic,
    saveUserDetailsEpic,
    addCommentEpic,
    addArticleToCollectionEpic,
    openAddArticleToCollectionConfirmationModalEpic,
]

export const rootEpic = combineEpics(...epics)
