## guocha


### 基础技术

- [umi](https://umijs.org/)
- [Ant Design of React](https://ant.design/docs/react/introduce-cn)
- [rematch](https://github.com/rematch/rematch) 
- Typescript

### 启动项目
开发环境
```bash
npm run dev # 或者 yarn dev
本地环境默认端口 `3031`, 不采用".env"里面的环境变量，umirc.ts内配置，
其他dev服务配置，如https启用：https://umijs.org/zh-CN/config#devserver
```

生产环境配置可以在umirc.prod.ts


### 接入微前端的主应用
umirc.ts -> qiankun ，不启用就删掉就行
src/app.ts 必须要抛出 qiankun的钩子，并不是可选项
** 本地调试需要在主前端代理webpack的webSocket，代理路径 "/dev-server"，指向本项目的host+port，portal-home该主项目不设置代理“ws:true”也可以 **

### 其他
请参考[常见问题](./guide.md)


### 基本目录

```
.
├── Procfile
├── README.md
├── conf
│   └── config.json
├── guide.md
├── mock
├── package-lock.json
├── package.json
├── scripts
│   └── ci.sh
├── src
│   ├── app.ts
│   ├── components
│   ├── configs
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── layoutSettings.ts
│   │   └── menu.ts
│   ├── global.less
│   ├── layouts
│   ├── lib
│   ├── models
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── document.ejs
│   │   ├── exception
│   │   │   ├── 403.tsx
│   │   │   └── 500.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   └── profile
│   ├── services
│   │   └── auth.ts
│   ├── typings
│   │   ├── Auth.ts
│   │   └── Common.ts
│   ├── typings.d.ts
│   └── utils
├── .umirc.ts
├── .umirc.prod.ts
├── tsconfig.json
└── yarn.lock
```
