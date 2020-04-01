import React from 'react';
import { Provider } from 'react-redux';
import store from './models/store';

export function rootContainer(container: any) {
  return React.createElement(
    Provider,
    {
      store,
    },
    container,
  );
}

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('guocha bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    // const auth = window._portalHomeProps.getAuth() || {};

    // if (auth.isLoggedIn) {
    // window.g_app.store.dispatch({
    //   type: 'auth/updateCurrentUserInfo',
    //   payload: auth.user,
    // });
    // dispatch({
    //   type: 'auth/updateCurrentUserInfo',
    //   payload: auth.user,
    // });
    // }

    console.log('guocha mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('guocha unmount', props);
  },
};
