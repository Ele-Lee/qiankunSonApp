/**
 * 按钮权限校验组件
 * @author Don
 */
import React from 'react';
import { connect } from 'react-redux';

interface Props {
  allPermission: string[];
  perKey: string;
}

const CompWithAuth: React.FC<Props> = ({ allPermission, perKey, children }) => {
  const hasPer = allPermission.includes('*') || allPermission.includes(perKey);
  if (typeof children === 'function') {
    return children(hasPer);
  } else if (hasPer) {
    return <>{children}</>;
  }
  return null;
};

export default connect(({ auth }: any) => ({
  allPermission: auth.userInfo.permission,
}))(CompWithAuth);
