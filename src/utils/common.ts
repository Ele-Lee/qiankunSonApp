/**
 * 根据url判断是否本地开发环境
 *
 * @returns {Boolean}
 */
export const isDev = (): boolean => {
  const hostName: string = window.location.hostname;

  if (hostName.indexOf('localhost') !== -1 || hostName.indexOf('192') !== -1) {
    return true;
  }

  return false;
};
