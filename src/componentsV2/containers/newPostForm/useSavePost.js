import { useDispatch } from 'react-redux';
import postsSvcs from '../../../services/posts';
import { setNewPostsAvailable } from '../../../actions';

/*
  To avoid creating two hooks for create and update a post
  this hook could makes both, since the behaviour is similar
*/

/*
  by default the type is for create a new post
  we dont need to worry about setting a default value on postId
  because the parent component already do it
*/

export const useSavePost = (
  type = 'create',
  formState,
  handleSuccess = () => {},
  handleFailure = () => {},
  postId
) => {
  const { createPost, editPost } = postsSvcs;
  const dispatch = useDispatch();

  // function returned to trigger save post behavior
  const savePost = async () => {
    // save post
    const newPost = {
      content: formState.content,
    };

    const { status } =
      type === 'edit'
        ? await editPost(postId, newPost)
        : await createPost(newPost);

    if (status === 200) {
      dispatch(setNewPostsAvailable(true));
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  return { savePost };
};
