/**
 * auth model
 */
import { createModel } from '@rematch/core';
import { UserInfo } from '@/typings/Auth';
import { getProfileInfo } from '@/services/auth';

interface State {
  isCheckLogin: boolean;
  userInfo: UserInfo | null;
}

const state: State = {
  isCheckLogin: false,
  userInfo: null,
};

export const auth = createModel({
  state,
  reducers: {
    setUser(state: State, payload: UserInfo) {
      return {
        ...state,
        userInfo: payload,
        isCheckLogin: true,
      };
    },
  },
  effects: {
    async fetchProfileInfo() {
      try {
        const res = await getProfileInfo();
        this.setUser(res.data.user);
      } catch (error) {
        this.setUser(null);
      }
    },
    async logout() {
      try {
        this.setUser(null);
        alert('need login');
      } catch (error) {}
    },
  },
});
