import { useDispatch } from 'react-redux';
import { deletePost } from '../../../services';
import { removePost } from '../../../actions';

export const useDeletePost = postId => {
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    const status = await deletePost(postId);
    if (status === 200 || status === 204) {
      dispatch(removePost(postId));
    }
  };

  return { handleDeletePost };
};
