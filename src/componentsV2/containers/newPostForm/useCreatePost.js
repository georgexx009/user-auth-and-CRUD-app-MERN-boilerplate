import { useDispatch } from 'react-redux';
import postsSvcs from '../../../services/posts';
import { addNewPost } from '../../../actions';

export const useCreatePost = (
  formState,
  handleSuccess = () => {},
  handleFailure = () => {}
) => {
  const { savePost } = postsSvcs;
  const dispatch = useDispatch();

  /*
    this proccess has two steps
    create the post, and once the id is provided by mongo
    it will update the user information adding that new post id
  */

  const createPost = async () => {
    // save post
    const newPost = {
      content: formState.content,
    };
    const { status, postDoc } = await savePost(newPost);

    if (status === 200) {
      dispatch(addNewPost(postDoc));
      handleSuccess();
    } else {
      handleFailure();
    }
  };

  return { createPost };
};
