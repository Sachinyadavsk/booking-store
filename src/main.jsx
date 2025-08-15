import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <div className="dark:bg-slate-900 dark:text-white">
                <App />
            </div>
        </HashRouter>
    </React.StrictMode>
)