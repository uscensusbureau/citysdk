import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    define: {
        global: 'globalThis',
        //'process.version': null,
        //process: null,
    },
    resolve: {
        alias: {
            process: 'process/browser',
            stream: 'stream-browserify',
            zlib: 'browserify-zlib',
            util: 'util',
        },
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            //plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
            output: {
                manualChunks: {
                    citysdk: ['citysdk'],
                },
            },
        },
    },
})
