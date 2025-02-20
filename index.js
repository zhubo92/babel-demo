import fs from 'fs';
import babel from "@babel/core";
import presetEnv from '@babel/preset-env';
import presetReact from '@babel/preset-react';

// 用 babel 转换 es6 代码
const jsCode = fs.readFileSync("./src/es6/code.js", "utf8");
const jsResult = babel.transform(jsCode, {
    presets: [
        //usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        //corejs 3 是 corejs 的版本
        [presetEnv, {useBuiltIns: "usage", corejs: 3}]
    ],
    plugins: []
});
fs.writeFileSync("./src/es6/result.js", jsResult.code);

// 用 babel 转换 jsx 代码
const reactCode = fs.readFileSync("./src/jsx/code.jsx", "utf8");
const reactResult = babel.transform(reactCode, {
    presets: [
        //usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        //corejs 3 是 corejs 的版本
        [presetEnv, {useBuiltIns: "usage", corejs: 3}],
        presetReact
    ],
    plugins: []
});

fs.writeFileSync("./src/jsx/result.js", reactResult.code);

