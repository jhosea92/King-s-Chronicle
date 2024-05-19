import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Rules from './Rules.jsx'
import Banner from './Banner.jsx'
import './index.css'
import { StateProvider } from './context/StateContext.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <div>
          <Banner/>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='rules' element={<Rules/>}/>
          </Routes>
        </div>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
