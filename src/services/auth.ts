import { ApiResult } from '@/typings/Common';
import request from '@/utils/request';
import api from '@/configs/api';
import { UserInfo } from '@/typings/Auth';

// 获取用户信息
export const getProfileInfo = async (): Promise<ApiResult<{ user: UserInfo }>> =>
  request.get(api.user.profileInfo);
