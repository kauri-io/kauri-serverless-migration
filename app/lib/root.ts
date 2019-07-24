import { combineEpics } from 'redux-observable'
import userDetailsEpic from './Epics/FetchUserDetailsEpic'
import showNotificationEpic from './Epics/ShowNotificationEpic'
import showConfirmationModalEpic from './Epics/ShowConfirmationModalEpic'
import routeChangeEpic from './Epics/RouteChangeEpic'
import hideIntroBannerEpic from './Epics/HideIntroBannerEpic'
import app from './Module'
import register, { registerEpic } from '../containers/LoginForm/Module'
// import { tipArticleEpic } from "../components/containers/Article/Module";
// import {
//   rejectArticleEpic,
//   approveArticleEpic,
// } from "../components/containers/ArticleReview/Module";
// import { publishArticleEpic } from "../components/containers/SubmitArticleForm/PublishArticleModule";
// import {
//   submitArticleEpic,
//   submitArticleVersionEpic,
//   editArticleEpic,
//   draftArticleEpic,
// } from "../components/containers/SubmitArticleForm/Module";
// import { addCommentEpic } from "../components/containers/Article/CommentArticleForm/Module";
// import localStorage, {
// startDriverStepsEpic,
// persistStateToLocalStorageEpic,
// finishedDriverStepsEpic,
// } from "./LocalStorageModule";
// import {
//   createCollectionEpic,
//   editCollectionEpic,
//   composeCollectionEpic,
// } from "../components/containers/CreateCollectionForm/Module";
// import { saveUserDetailsEpic } from "../components/common/EditProfile/Module";
import modal from '../components/Modal/Module'
// import { checkpointArticlesEpic } from "../components/containers/CheckpointArticles/Module";
// import { deleteDraftArticleEpic } from "../components/containers/ArticleDraft/DeleteDraftArticleModule";
// import { addArticleToCollectionEpic } from "../components/connections/AddToCollection/Module";
// import {
//   verifyEmailEpic,
//   resendEmailVerificationEpic,
//   emailSubscribeEpic,
// } from "../components/containers/EmailVerification/Module";
// import { voteEpic } from "../components/containers/Article/ApprovedArticle/VoteModule";
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

export const rootReducer = {
    app,
    modal,
    register,
    // localStorage,
}

const epics = [
    showNotificationEpic,
    registerEpic,
    showConfirmationModalEpic,
    routeChangeEpic,
    //   submitArticleEpic,
    //   submitArticleVersionEpic,
    //   editArticleEpic,
    //   addCommentEpic,
    userDetailsEpic,
    //   // ethUsdPriceEpic,
    hideIntroBannerEpic,
    //   tipArticleEpic,
    //   rejectArticleEpic,
    //   startDriverStepsEpic,
    //   persistStateToLocalStorageEpic,
    //   finishedDriverStepsEpic,
    //   createCollectionEpic,
    //   composeCollectionEpic,
    //   approveArticleEpic,
    //   draftArticleEpic,
    //   editCollectionEpic,
    //   checkpointArticlesEpic,
    //   saveUserDetailsEpic,
    //   // ReasonML epics
    //   publishArticleEpic,
    //   // Typescript epics
    //   deleteDraftArticleEpic,
    //   addArticleToCollectionEpic,
    //   verifyEmailEpic,
    //   resendEmailVerificationEpic,
    //   emailSubscribeEpic,
    //   voteEpic,
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
]

export const rootEpic = combineEpics(...epics)
