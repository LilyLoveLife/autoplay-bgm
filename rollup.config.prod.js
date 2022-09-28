/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2022-09-21 14:42:25
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2022-09-28 15:07:15
 * @FilePath: /tagging/Users/hrtps/Documents/Projects/autoplay-bgm/rollup.config.prod.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'


const getPath = _path => path.resolve(__dirname, _path)

export default {
    input: path.resolve(__dirname, './src/index.ts'),
    output: [
        {
            file: path.resolve(__dirname, 'lib/index.js'),
            format: 'esm'
        },
    ],
    plugins: [
        ts({
            typescript,
            tsconfig: getPath('./tsconfig.prod.json'), // 导入本地ts配置
            extensions: [
                '.js',
                '.ts',
                '.tsx'
            ],
            exclude: 'node_modules/**'
        }),
        getBabelOutputPlugin({
            allowAllFormats: true,
            presets: ['@babel/preset-env'],
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        // 仅本地开发测试时候使用
        // serve({
        //     open: true,
        //     host: 'localhost',
        //     port: 8001, 
        //     openPage: path.resolve(__dirname, '/index.html'),
        //     contentBase: ['dist','public']  
        // })
    ]
}