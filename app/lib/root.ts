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
import { voteEpic, tipEpic } from '../containers/Article/Module'
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
    removeGrantedMemberEpic,
    removeResourceEpic,
    changeGrantedMemberRoleEpic,
    revokeInvitationEpic,
    resendInvitationEpic,
    transferArticleToCommunityEpic,
    leaveCommunityEpic,
    joinCommunityEpic,
    removeMemberEpic,
    banMemberEpic,
    unbanMemberEpic,
} from '../containers/Community/Module'
import {
    rejectArticleTransferEpic,
    acceptArticleTransferEpic,
    finaliseArticleTransferEpic,
} from '../containers/PublicProfile/Manage/TransferModule'
import { saveUserDetailsEpic } from '../components/EditProfileForm/Module'
import { addCommentEpic } from '../containers/Article/Module'
import {
    addResourceToCollectionEpic,
    openAddArticleToCollectionConfirmationModalEpic,
} from '../containers/AddToCollection/Module'
import {
    bookmarkEpic,
    unbookmarkEpic,
    createBookmarkFolderEpic,
    deleteBookmarkFolderEpic,
    editBookmarkFolderEpic,
} from '../containers/Bookmark/Module'
import {
    submitExternalLinkEpic,
    editExternalLinkEpic,
    changeOwnerExtenalLinkEpic,
} from '../containers/CreateLink/Module'

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
    changeGrantedMemberRoleEpic,
    approveResourceEpic,
    removeResourceEpic,
    revokeInvitationEpic,
    removeGrantedMemberEpic,
    acceptCommunityInvitationEpic,
    waitForInvitationReconciliationEpic,
    sendCommunityInvitationEpic,
    curateCommunityResourcesEpic,
    communityCreatedEpic,
    updateCommunityEpic,
    createCommunityEpic,
    saveUserDetailsEpic,
    addCommentEpic,
    addResourceToCollectionEpic,
    openAddArticleToCollectionConfirmationModalEpic,
    bookmarkEpic,
    unbookmarkEpic,
    createBookmarkFolderEpic,
    deleteBookmarkFolderEpic,
    editBookmarkFolderEpic,
    submitExternalLinkEpic,
    editExternalLinkEpic,
    changeOwnerExtenalLinkEpic,
    joinCommunityEpic,
    leaveCommunityEpic,
    removeMemberEpic,
    banMemberEpic,
    unbanMemberEpic,
    tipEpic,
]

export const rootEpic = combineEpics(...epics)
