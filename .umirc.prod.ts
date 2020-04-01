export default {
  // targets: { chrome: 58 },
  // alias: {
  //   'react-dom$': 'react-dom/profiling',
  //   'scheduler/tracing': 'scheduler/tracing-profiling',
  // },
  // chainWebpack(config, { webpack }) {
  //   // 删除进度条插件
  //   config.plugins.delete('progress');
  //   config.merge({
  //     plugin: {
  //       install: {
  //         plugin: require('uglifyjs-webpack-plugin'),
  //         args: [
  //           {
  //             sourceMap: true,
  //             uglifyOptions: {
  //               compress: {
  //                 drop_console: false, // 删除所有的 `console` 语句
  //                 dead_code: true, // 删除无用代码
  //                 passes: 1, // 压缩两次看看效果
  //               },
  //               output: {
  //                 // 最紧凑的输出
  //                 beautify: false,
  //                 // 删除所有的注释
  //                 comments: false,
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  // },
  // dynamicImport: {
  //   loading: './components/PageLoading/index',
  // },
};
