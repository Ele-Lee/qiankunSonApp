/**
 * umi相关配置
 *
 * 详见 https://umijs.org/zh/config/
 */
import { defineConfig } from 'umi';
import { ClientRequest } from 'http';

const PROJECT_NAME = 'guocha';
const BASE_PATH = '/' + PROJECT_NAME;

const config = defineConfig({
  qiankun: { slave: { keepOriginalRoutes: true } },
  mountElementId: PROJECT_NAME,
  base: BASE_PATH,
  outputPath: './build',
  publicPath: `${BASE_PATH}/`,
  hash: true,
  title: '果茶',
  antd: {},
  dva: {},
  devServer: {
    port: 3031,
  },
});

export default config;
