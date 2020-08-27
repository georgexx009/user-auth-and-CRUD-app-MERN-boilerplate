import { useDispatch } from 'react-redux';
import postsSvcs from '../../../services/posts';
import { setNewPostsAvailable } from '../../../actions';

export const useCreatePost = (
  type = 'create',
  formState,
  handleSuccess = () => {},
  handleFailure = () => {},
  postId
) => {
  const { createPost, editPost } = postsSvcs;
  const dispatch = useDispatch();

  /*
    this proccess has two steps
    create the post, and once the id is provided by mongo
    it will update the user information adding that new post id
  */

  const savePost = async () => {
    // save post
    const newPost = {
      content: formState.content,
    };

    const { status, postDoc } =
      type === 'edit'
        ? await editPost(postId, newPost)
        : await createPost(newPost);

    if (status === 200) {
      //dispatch(addNewPost(postDoc));
      dispatch(setNewPostsAvailable(true));
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  return { savePost };
};
