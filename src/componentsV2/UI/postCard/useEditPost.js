import { useDispatch } from 'react-redux';
import { setPostForm } from '../../../actions';

export const useEditPost = (id, content) => {
  const dispatch = useDispatch();

  const handleEditPost = () => {
    const postData = {
      id,
      content,
    };
    dispatch(setPostForm(true, 'edit', postData));
  };

  return { handleEditPost };
};
