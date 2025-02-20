import fs from 'fs';
import babel from "@babel/core";

const code = fs.readFileSync("./test.js", "utf8");

const result = babel.transform(code, {
    presets: ['@babel/preset-env'],
    plugins: []
});

console.log(result);

fs.writeFileSync("./result.js", result.code);
