import request from '@/utils/request';
import api from '@/configs/api';

export const getConfigData = async (data: { key: string }) =>
  request.get<any>(api.config.getConfig, data);
