import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App'
import CardList from './components/CardList'
import Home from './components/Home'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './redux/app/store'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home /> } />
      <Route path='/cardlist' element={<CardList />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
