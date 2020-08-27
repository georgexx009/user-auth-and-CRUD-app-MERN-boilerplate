import { postsConstants } from './types';

export function updateProfilePosts(newPosts) {
  return {
    type: postsConstants.UPDATE_PROFILE_POSTS,
    payload: newPosts,
  };
}

export function updateGeneralPosts(newPosts) {
  return {
    type: postsConstants.UPDATE_GENERAL_POSTS,
    payload: newPosts,
  };
}

export function addNewPost(newPost) {
  return {
    type: postsConstants.ADD_NEW_POST,
    payload: newPost,
  };
}

export function removePost(postId) {
  return {
    type: postsConstants.REMOVE_POST,
    payload: postId,
  };
}

export function showPostForm(status) {
  return {
    type: postsConstants.SHOW_POST_FORM,
    payload: {
      status,
    },
  };
}

export function setPostForm(
  status = false,
  type = 'create',
  postData = { id: '', content: '' }
) {
  return {
    type: postsConstants.SET_POST_FORM,
    payload: {
      status,
      type,
      postData,
    },
  };
}

export function postSectionVisible(status) {
  return {
    type: postsConstants.POST_SECTION_VISIBLE,
    payload: {
      status,
    },
  };
}

export function setNewPostsAvailable(status) {
  return {
    type: postsConstants.SET_NEW_POSTS_AVAILABLE,
    payload: {
      status,
    },
  };
}
