import React, { useEffect, useCallback } from 'react';
import { Link } from 'umi';
import { history } from 'umi';
import { LayoutSettings } from '@/configs/layoutSettings';
import { RouteComponentProps } from 'react-router';

import { useSelector, useDispatch } from '@/lib/hooks/useRematch';
import PageLoading from '@/components/PageLoading';
import { checkRoutes, filterMenu } from '@/utils/authority';
import '@/utils/tracker';

export interface BasicLayoutProps extends RouteComponentProps {
  settings: LayoutSettings;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const dispatch = useDispatch();

  const { settings, isCheckLogin, userInfo } = useSelector(({ layout, auth }) => ({
    // collapsed: layout.collapsed,
    settings: layout.settings,
    isCheckLogin: auth.isCheckLogin,
    userInfo: auth.userInfo,
  }));

  const { location: { pathname = '' } = {} } = props;

  useEffect(() => {
    // @ts-ignore
    dispatch.auth.fetchProfileInfo();
  }, []);

  useEffect(() => {
    // 检查路由权限
    if (userInfo) {
      const portalRoles = userInfo.portal_role || [];
      const hasPermission = checkRoutes(portalRoles, pathname);
      if (!hasPermission) {
        history.replace('/exception/403');
      }
    }
  }, [pathname, userInfo]);

  // init
  if (!isCheckLogin) {
    return <PageLoading />;
  }

  // 如果没有用户信息则重定向到登录页
  // if (isCheckLogin && !userInfo) {
  //   redirectLogin();
  // }

  // 根据用户角色筛选菜单
  // const portalRoles = userInfo ? userInfo.portal_role || [] : [];

  return <>{props.children}</>;
};

export default BasicLayout;
