/**
 * 个人中心
 *
 */
import * as React from 'react';
import { Alert, Layout, Menu, Tag } from 'antd';
import { useSelector } from '@/lib/hooks/useRematch';

const { Content, Sider } = Layout;

const Profile: React.FC = () => {
  const { userInfo } = useSelector(({ auth }) => ({
    userInfo: auth.userInfo,
  }));
  const { user_role: userRole = [], username = '', phone = '' } = userInfo || {};
  const hasRole = userRole && userRole.length > 0;
  return (
    <Content style={{ padding: '0px' }}>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key="1">个人信息</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <h2>基本信息</h2>
          <p>{username}</p>
          <p>{phone}</p>
          {hasRole ? (
            <div>
              {userRole.map(item => (
                <Tag key={item.role_id}>
                  {item.role_id}|{item.role_name}
                </Tag>
              ))}
            </div>
          ) : (
            <Alert message="你的账号未分配权限，请联系HR同学" type="error" />
          )}
        </Content>
      </Layout>
    </Content>
  );
};

export default Profile;
