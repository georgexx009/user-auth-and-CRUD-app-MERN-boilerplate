export const initialState = {
  snackbarData: {
    show: false,
    label: '',
    type: '',
  },
  userInfo: {
    firstName: '',
    lastName: '',
    username: 'not logged',
    token: '',
    admin: false,
  },
  posts: {
    generalPosts: [],
    profilePosts: [],
    showPostForm: false,
    newPostsAvailable: false,
    postFormData: {
      type: 'create',
      status: false,
      postData: { id: '', content: '' },
    },
    postSectionVisible: false,
  },
};
