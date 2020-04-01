/**
 * layout model
 */
import { createModel } from '@rematch/core';
import defaultSettings, { LayoutSettings } from '@/configs/layoutSettings';

interface State {
  collapsed: boolean;
  settings: LayoutSettings;
}

const state: State = {
  collapsed: false,
  settings: defaultSettings,
};

export const layout = createModel({
  state,
  reducers: {
    setCollapsed(state: State, payload: { collapsed: boolean }) {
      return {
        ...state,
        collapsed: payload.collapsed,
      };
    },
    setSettings(state: State, payload: { settings: LayoutSettings }) {
      return {
        ...state,
        settings: payload.settings,
      };
    },
  },
});
