import path from 'path'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
// import {babel} from '@rollup/plugin-babel'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'


const getPath = _path => path.resolve(__dirname, _path)

export default {
    input: path.resolve(__dirname, './src/index.ts'),
    output: [
        {
            file: path.resolve(__dirname, 'dist/bundle.esm.js'),
            format: 'esm'
        },
        {
            file: path.resolve(__dirname, 'dist/bundle.umd.js'),
            name: 'bundle.umd.js',
            format: 'umd'
        },
        {
            file: path.resolve(__dirname, 'dist/bundle.iife.js'),
            name: 'bundle.iife.js',
            format: 'iife'
        },
        {
            file: path.resolve(__dirname, 'dist/bundle.amd.js'),
            name: 'bundle.amd.js',
            format: 'amd'
        }
    ],
    plugins: [
        ts({
            typescript,
            tsconfig: getPath('./tsconfig.dev.json'), // 导入本地ts配置
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
        serve({
            open: true,
            host: 'localhost',
            port: 8001, 
            openPage: path.resolve(__dirname, '/index.html'),
            contentBase: ['dist','public']  
        })
    ]
}