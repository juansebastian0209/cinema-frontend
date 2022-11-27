import ReactDOM from 'react-dom/client'
import React from 'react'

// Styles
import "normalize.css"

import { RouterManager } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterManager />
  </React.StrictMode>
);
