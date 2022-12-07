import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

window.process = {
    env: {
        NODE_ENV: 'prod',
    },
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    //<React.StrictMode>
    <App />
    //</React.StrictMode>,
)
