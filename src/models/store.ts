import { init, RematchRootState } from '@rematch/core';
// import createLoadingPlugin from '@rematch/loading';

import * as models from './_models';

// const loadingOptions = {};
// const loading = createLoadingPlugin(loadingOptions);

interface LoadingPlugin {
  loading: {
    loading: boolean;
    models: GlobalState;
    effects: Dispatch;
  };
}

// generate Redux store
const store = init({
  models,
  // plugins: [loading],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type GlobalState = RematchRootState<typeof models> & LoadingPlugin;

export default store;
