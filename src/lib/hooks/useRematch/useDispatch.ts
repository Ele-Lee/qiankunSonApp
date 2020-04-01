import { useDispatch } from 'react-redux';
import { Dispatch } from '@/models/store';

export const useRematchDispatch = () => {
  const dispatch: Dispatch = useDispatch();

  return dispatch;
};

export default useRematchDispatch;
