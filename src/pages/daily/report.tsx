import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getReport } from '@/services/portalapi/report';
import { useLocation } from 'umi';
import { message } from 'antd';
import { useAsyncRetry } from 'react-use';
import { LoadingOutlined } from '@ant-design/icons';

interface ReportProps {}
const Report: React.FC<ReportProps> = ({}) => {
  const localtion: any = useLocation();
  const [source, setSource] = useState('');

  const { value, loading } = useAsyncRetry(async () => {
    const { query } = localtion;
    const res = await getReport({ id: query.id });
    if (res.code === 0) {
      return res;
    } else {
      message.error('接口出错');
      return null;
    }
  }, [localtion]);

  useEffect(() => {
    if (value && value.code === 0) {
      setSource(value.data.content);
      document.title = value.data.title;
    }
  }, [value]);

  return (
    <div style={{ padding: '10px 14px' }}>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          正在加载...
          <LoadingOutlined />
        </div>
      ) : (
        <ReactMarkdown {...{ source }}></ReactMarkdown>
      )}
    </div>
  );
};
export default Report;
