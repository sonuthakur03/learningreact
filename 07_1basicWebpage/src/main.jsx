import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import Experiences from './components/Experiences/Experiences'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/experiences' element={<Experiences/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
