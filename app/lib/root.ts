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
import { checkpointArticlesEpic } from "../containers/CheckpointArticles/Module";
import {
  createCollectionEpic,
  editCollectionEpic,
  composeCollectionEpic,
} from "../containers/CreateCollectionForm/Module";
// import { saveUserDetailsEpic } from "../components/common/EditProfile/Module";
import { deleteDraftArticleEpic } from "../containers/ArticleDraft/DeleteDraftArticleModule";
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
    
    // TODO: // import { addCommentEpic } from "../components/containers/Article/CommentArticleForm/Module";
    // TODO: // import { addArticleToCollectionEpic } from "../containers/AddToCollection/Module";

export const rootReducer = {
  app,
  modal,
  register,
}

const epics = [
  registerEpic,
  routeChangeEpic,
  userDetailsEpic,
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

    //   TODO: addCommentEpic,
  //   saveUserDetailsEpic,
  // addArticleToCollectionEpic,
]

export const rootEpic = combineEpics(...epics)
