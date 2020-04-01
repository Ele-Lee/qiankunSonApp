import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const BlankLayout: React.FC = ({ children }) => (
  <Content
    style={{
      margin: '0px -24px 0',
      padding: 24,
      background: '#fff',
    }}
  >
    {children}
  </Content>
);

export default BlankLayout;
