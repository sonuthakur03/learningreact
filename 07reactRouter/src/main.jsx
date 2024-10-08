import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact-us",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// creating route for paths when certain elements are renered
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      {/* these are childrens  */}
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>} />
      <Route 
       loader={githubInfoLoader}
      path='github' 
      element={<Github/>} 
      />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

// Not importing app and instead of app using router for displaying element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
