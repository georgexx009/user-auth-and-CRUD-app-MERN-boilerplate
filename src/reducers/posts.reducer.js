import { postsConstants } from '../actions/types';

export function postsReducer(state = {}, action) {
  switch (action.type) {
    case postsConstants.UPDATE_GENERAL_POSTS:
      return {
        ...state,
        generalPosts: action.payload,
      };
    case postsConstants.UPDATE_PROFILE_POSTS:
      return {
        ...state,
        profilePosts: action.payload,
      };
    case postsConstants.ADD_NEW_POST:
      return {
        ...state,
        profilePosts: [...state.profilePosts, action.payload],
        generalPosts: [...state.generalPosts, action.payload],
      };
    case postsConstants.REMOVE_POST:
      return {
        ...state,
        profilePosts: state.profilePosts.filter(
          el => el._id !== action.payload
        ),
        generalPosts: state.generalPosts.filter(
          el => el._id !== action.payload
        ),
      };
    case postsConstants.SHOW_POST_FORM:
      return {
        ...state,
        showPostForm: action.payload.status,
      };
    case postsConstants.SET_POST_FORM:
      return {
        ...state,
        postFormData: action.payload,
      };
    case postsConstants.POST_SECTION_VISIBLE:
      return {
        ...state,
        postSectionVisible: action.payload.status,
      };
    case postsConstants.SET_NEW_POSTS_AVAILABLE:
      return {
        ...state,
        newPostsAvailable: action.payload.status,
      };
    default:
      return state;
  }
}
