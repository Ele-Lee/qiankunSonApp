import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { MenuList } from '@/typings/Common';
import { LayoutSettings } from '@/configs/layoutSettings';
import { useDispatch } from '@/lib/hooks/useRematch';
import styled from 'styled-components';
import { history } from 'umi';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export interface SideMenuProps {
  menu: MenuList[];
  children?: React.ReactNode;
  settings: LayoutSettings;
  showBreadcrumb?: boolean;
}
const SideMenu: React.FC<SideMenuProps> = ({ menu, children, settings }) => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const onCollapse = () => {
    dispatch.layout.setCollapsed({ collapsed: !collapsed });
    setCollapsed(!collapsed);
  };

  const menuHeaderRender = useCallback(() => {
    if (!settings) return null;
    return (
      <HeaderWrap onClick={() => history.push('/')}>
        <img src={settings.logo} alt="" />
        {settings.title}
      </HeaderWrap>
    );
  }, [settings]);

  const renderMenuItem = useCallback(
    () => (menuList: MenuList[] = menu) => {
      const _ren = m =>
        m.map(item => {
          const { icon, path, children, name } = item;
          const _renText = () => (
            <>
              {!!icon && React.createElement(icon)}
              <span>{name}</span>
            </>
          );
          if (Array.isArray(children) && children.length) {
            return (
              <SubMenu key={path} title={<span>{_renText()}</span>}>
                {_ren(children)}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={path} onClick={() => history.push(path)}>
              {_renText()}
            </Menu.Item>
          );
        });
      return _ren(menuList);
    },
    [menu],
  );
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        {menuHeaderRender()}
        <Menu theme="dark" defaultSelectedKeys={menu.length ? [menu[0].path] : ['']} mode="inline">
          {renderMenuItem()}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

const HeaderWrap = styled.div`
  padding: 0 24px;
  overflow: hidden;
  text-align: center;
  margin: 20px 0;
  color: #fff;
  img {
    height: 32px;
    width: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

export default React.memo(SideMenu);
