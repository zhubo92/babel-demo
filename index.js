import fs from 'fs';
import babel from "@babel/core";
import presetEnv from '@babel/preset-env';

const code = fs.readFileSync("./test.js", "utf8");

const result = babel.transform(code, {
    presets: [
        //usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        //corejs 3 是 corejs 的版本
        [presetEnv, {useBuiltIns: "usage", corejs: 3}]
    ],
    plugins: []
});

console.log(result);

fs.writeFileSync("./result.js", result.code);
