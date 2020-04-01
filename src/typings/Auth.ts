interface UserRole {
  role_id: number;
  role_name: string;
}

export interface UserInfo {
  id: number;
  access_token: string;
  phone: string;
  username: string;
  role: number;
  status: number;
  dingtalk_uid?: string;
  wx_username?: string;
  portal_role?: number[];
  user_role?: UserRole[];
}
