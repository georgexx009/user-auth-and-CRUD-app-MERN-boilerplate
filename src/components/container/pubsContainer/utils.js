import { urlServer } from '../../../../constants';
import { updatePubs } from '../../../actions';

export const fetchPubsObj = {
  url: `${urlServer}/publications/filterPubs`,
  method: 'POST',
  onSuccess: updatePubs,
};
