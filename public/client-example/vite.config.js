import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import notifier from 'vite-plugin-notifier'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), notifier()],
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
                GlobalsPolyfills({
                    process: true,
                    buffer: true,
                }),
            ],
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                GlobalsPolyfills({
                    process: true,
                    buffer: true,
                }),
            ],
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
