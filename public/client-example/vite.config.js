import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import notifier from 'vite-plugin-notifier'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/census-geojson/',
    plugins: [
        react(),
        //notifier()
    ],
    server: {
        port: 4000,
    },
    resolve: {
        alias: {
            /** browserify for @jbrowse/react-linear-genome-view */
            stream: 'stream-browserify',
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis',
            },
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
            output: {
                manualChunks: {
                    citysdk: ['citysdk'],
                },
            },
            plugins: [globals()],
        },
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
})

//// https://vitejs.dev/config/
//export default defineConfig({
//    base: '',
//    define: {
//        global: 'globalThis',
//        process: JSON.stringify(process),
//    },
//    resolve: {
//        alias: {
//            //process: 'process/browser',
//            stream: 'stream-browserify',
//            //zlib: 'browserify-zlib',
//            //util: 'util',
//        },
//    },
//    plugins: [react()],
//    build: {
//        rollupOptions: {
//            plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
//            //output: {
//            //    manualChunks: {
//            //        citysdk: ['citysdk'],
//            //    },
//            //},
//        },
//    },
//})
