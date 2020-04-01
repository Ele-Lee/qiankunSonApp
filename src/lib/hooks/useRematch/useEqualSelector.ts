/**
 * use lodash/isEqual with redux useSelector
 */

import isEqual from 'lodash/isEqual';
import { useSelector } from 'react-redux';

import { GlobalState } from '@/models/store';

export const useEqualSelector: UseEqualSelector = selector => {
  return useSelector(selector, isEqual);
};

interface UseEqualSelector {
  <TSelected>(selector: (state: GlobalState) => TSelected): TSelected;
}

export default useEqualSelector;
