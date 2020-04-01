## 常见问题

### 路由

1. 约定式路由

    采用约定式路由，减少开发时对于路由项的配置，详细的约定规范请参考[UMI](https://umijs.org/zh-CN/config#routes)的文档。

### 登录 

  微前端home去做

1. 开发

    使用 `proxy` 配置代理，将需要返回的登录页和 `course_portal` 相关的接口代理到 `course_portal` UAE开发环境的地址, 注意配置代理时 `/protalapi` 应该在 `/protal` 之前定义，且本项目的接口定义不再包含 `/portal` 及 `/portalapi` 字段。
   
2. UAE的开发、预发和生产

    UAE的开发、预发和生产环境使用的则是之前的cookie策略，通过UAE配置地址和在 `server/app.js`设置cookie，最后通过 proxy代理组件库的工具函数

### 鉴权

1. 菜单栏和路由

    在 `menu.ts` 配置 `roles` 限制特定角色查看菜单和路由，如果直接通过url进入而当前用户无权限统一返回 `403` 页面。

2. 按钮

    按钮权限的控制则是通过 `@/components/Authorized/CompWithAuth` 传入特定的 `permission key` 值实现的，直接调用即可。

### 部署

1. `server/app.js`

    UAE --> 配置文件 --> KeyValue 设置 `course_portal` 的登录页URL和后端接口地址，如：
    ``` json
      {
        "key": "coursePortalApiHost",
        "value": "http://grportalapi.uae.shensz.local/portalapi"
      }
      {
        "key": "coursePortalHost",
        "value": "http://courseportal.uae.shensz.local/portal"
      }
    ```

    然后在app.js读取配置，设置对应的cookie即可

2. `scripts/ci.sh`

    更改 `app_id` 
