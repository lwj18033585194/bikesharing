const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
    // 配置路径别名
    addWebpackAlias({
        defaultStyle: path.resolve(__dirname, 'src/style')
    }),
    // antd按需加载
    //小龙
    // fixBabelImports('antd', {
    //     libraryDirectory: 'es',
    //     style: true,
    // }),
    //官网
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // antd主体设置
    addLessLoader({
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#E066FF' },
        },
    }),
);