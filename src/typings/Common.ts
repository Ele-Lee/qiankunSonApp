export interface ApiResult<T = null> {
  code: number;
  data: T & Object;
  msg: string;
}

export interface MenuList {
  path: string;
  name?: string;
  roles?: number[];
  icon?: React.ReactNode;
  children?: MenuList[];
}
