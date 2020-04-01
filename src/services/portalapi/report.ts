import request from '@/utils/request';
import api from '@/configs/api';

export const getReport = async (data: { id: number }) => {
  return request.get<any>(api.report.base, data);
};
