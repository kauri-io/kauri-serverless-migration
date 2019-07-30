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
import { publishArticleEpic } from '../containers/SubmitArticleForm/PublishArticleModule'
import {
    submitArticleEpic,
    submitArticleVersionEpic,
    editArticleEpic,
    draftArticleEpic,
} from '../containers/SubmitArticleForm/Module'
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
import { voteEpic } from "../containers/Article/Module";
// import {
//   createCommunityEpic,
//   communityCreatedEpic,
//   updateCommunityEpic,
// } from "../components/containers/CreateCommunityForm/Module";
// import {
//   curateCommunityResourcesEpic,
//   approveResourceEpic,
//   sendCommunityInvitationEpic,
//   acceptCommunityInvitationEpic,
//   revokeInvitationEpic,
//   removeMemberEpic,
//   removeResourceEpic,
//   changeMemberRoleEpic,
//   resendInvitationEpic,
//   transferArticleToCommunityEpic,
// } from "../components/containers/Community/Module";
// import {
//   rejectArticleTransferEpic,
//   acceptArticleTransferEpic,
//   finaliseArticleTransferEpic,
// } from "../components/containers/PublicProfile/Manage/TransferModule";

// TODO: // import { addCommentEpic } from "../components/containers/Article/CommentArticleForm/Module";
// TODO: // import { addArticleToCollectionEpic } from "../containers/AddToCollection/Module";
// import { saveUserDetailsEpic } from "../components/common/EditProfile/Module";

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

    //   createCommunityEpic,
    //   communityCreatedEpic,
    //   updateCommunityEpic,
    //   rejectArticleTransferEpic,
    //   acceptArticleTransferEpic,
    //   finaliseArticleTransferEpic,
    //   curateCommunityResourcesEpic,
    //   approveResourceEpic,
    //   sendCommunityInvitationEpic,
    //   acceptCommunityInvitationEpic,
    //   revokeInvitationEpic,
    //   removeMemberEpic,
    //   removeResourceEpic,
    //   changeMemberRoleEpic,
    //   resendInvitationEpic,
    //   transferArticleToCommunityEpic,

    //   TODO: addCommentEpic,
    //   saveUserDetailsEpic,
    // addArticleToCollectionEpic,
]

export const rootEpic = combineEpics(...epics)
