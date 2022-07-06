import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [
    {
        input: './index.js',
        output: {
            file: '../pirate-proxy.club.js',
            format: 'es'
        },
        preferBuiltins: false,
        plugins: [
            nodePolyfills(),
            nodeResolve( {
                browser: true,
                preferBuiltins: false
            } ),
            commonjs()
        ]
    }
];