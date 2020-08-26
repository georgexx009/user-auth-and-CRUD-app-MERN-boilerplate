import { useDispatch } from 'react-redux';
import postsSvcs from '../../../services/posts';
import { removePost } from '../../../actions';

export const useDeletePost = postId => {
  const { deletePost } = postsSvcs;
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    const status = await deletePost(postId);
    if (status === 200 || status === 204) {
      dispatch(removePost(postId));
    }
  };

  return { handleDeletePost };
};
