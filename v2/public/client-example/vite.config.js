import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import notifier from 'vite-plugin-notifier'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [react()],
    server: {
        port: 4000,
    },
    resolve: {
        alias: {
            /** browserify for isomorphic-unfetch */
            stream: 'stream-browserify',
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    process: true,
                    buffer: true,
                }),
            ],
        },
    },
    build: {
        rollupOptions: {
            //output: {
            //    manualChunks: {
            //        citysdk: ['citysdk'],
            //    },
            //},
            // enable Rollup node global polyfills
            plugins: [globals()],
        },
    },
})
