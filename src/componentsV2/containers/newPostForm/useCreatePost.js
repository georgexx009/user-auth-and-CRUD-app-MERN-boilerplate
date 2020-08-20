import { useSelector, useDispatch } from 'react-redux';
import { savePost, updateUserPosts } from '../../../services';
import { setUserPubs, addNewPost } from '../../../actions';

export const useCreatePost = (
  formState,
  handleSuccess = () => {},
  handleFailure = () => {}
) => {
  const userData = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  /*
    this proccess has two steps
    create the post, and once the id is provided by mongo
    it will update the user information adding that new post id
  */

  const createPost = async () => {
    // save post
    const newPost = {
      username: userData.username,
      content: formState.post,
    };
    const postDoc = await savePost(newPost);

    // update posts list from user
    let newPosts = {
      posts: [...userData.posts, postDoc._id],
    };
    const { status, data } = await updateUserPosts(newPosts);

    if (status === 200) {
      dispatch(setUserPubs(data.posts));
      dispatch(addNewPost(postDoc));
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  return { createPost };
};
