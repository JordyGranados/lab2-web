import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


import React from 'react'
import { createRoot } from 'react-dom/client'
import { CustomHook } from './components/CustomHook'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  React.createElement(React.StrictMode, null, React.createElement(CustomHook))
)

