import menu from '@/configs/menu';
import { intersection } from 'lodash';
import { MenuList } from '@/typings/Common';

const findItemNested = (arr: any[], pathname: string): any =>
  arr.reduce((a, item) => {
    if (a) return a;
    if (item.path === pathname) return item;
    if (item.children) return findItemNested(item.children, pathname);
  }, null);
/**
 * 获取路由的权限信息
 * @param pathname
 * @param list
 */
function getRouteRoles(pathname: string, list = menu): any {
  const res = findItemNested(list, pathname);
  return res ? res.roles || [] : [];
}

/**
 * 检查路由权限
 * @param portalRoles
 * @param pathname
 */
export function checkRoutes(portalRoles: number[], pathname: string) {
  const routeRoles = getRouteRoles(pathname);
  if (routeRoles.length && !intersection(routeRoles, portalRoles).length) {
    return false;
  }
  return true;
}

/**
 * 检查角色权限
 * @param portalRoles
 * @param roles
 * @param item
 */
const checkRolesPermission = (portalRoles: number[], roles: any, item: any) => {
  if (!roles) {
    return item;
  }
  if (intersection(roles, portalRoles).length) {
    return item;
  } else {
    return null;
  }
};

/**
 * 筛选菜单
 * @param portalRoles
 * @param menuList
 */
export const filterMenu = (portalRoles: number[], menuList = menu): MenuList[] =>
  menuList.map((item: any) => {
    const localItem = {
      ...item,
      children: item.children ? filterMenu(portalRoles, item.children) : [],
    };
    return checkRolesPermission(portalRoles, item.roles, localItem);
  });
