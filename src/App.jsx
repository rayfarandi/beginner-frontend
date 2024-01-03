import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/home'
import Product from './pages/Product'
import CheckOut from './pages/CheckOut'
import DetailOrder from './pages/DetailOrder'
import ProductDetail from './pages/ProductDetail'
import HistoryOrder from './pages/HistoryOrder'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/register',
    element: <Register />
  },
  {
    path:'/forgotpasswords',
    element: <ForgotPassword/>
  },
  {
    path:'/product',
    element: <Product />
  },
  {
    path:'/checkout',
    element: <CheckOut />
  },
  {
    path:'/detailorder',
    element: <DetailOrder />
  },
  {
    path:'/productdetail/:id',
    element: <ProductDetail />
  },
  {
    path:'/historyorder',
    element: <HistoryOrder />
  },
  {
    path:'/profile',
    element: (<PrivateRoute><Profile/></PrivateRoute>)
  }
])

const App=()=>{
  return(
    <RouterProvider router={router} />
  )
}

export default App