// 插件版本   
/* 
文件的执行条件
1.终端输入：npx  rollup命令 
2.执行平台node
3.
*/

import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: ['./src/index.ts'],//入口文件告诉rollup打包
    output: [
        {
            file: 'dist/my-lib-cjs.js',
            format: 'cjs',
            name: 'my-lib-cjs.js',
        },
        {
            file: 'dist/my-lib-umd.js',
            format: 'umd',
            name: 'my-lib-umd.js',
        },
        {
            file: 'dist/my-lib-esm.js',
            format: 'es',
            name: 'my-lib-esm.js',
        },
    ],
    plugins: [//插件配置  使用插件打包具体的文件
        typescript(), // 会自动读取 文件tsconfig.json配置
        less({ output: './dist/index.css' }),
        // scss({ output: './dist/index.css' }),
        clear({//打包前先清空之前dist
            targets: ['dist'],
        }),
        resolve(), // 这样 Rollup 能找到 `ms`
        commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
        babel({
            exclude: 'node_modules/**', // 防止打包node_modules下的文件
            runtimeHelpers: true, // 使plugin-transform-runtime生效
        }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};