import React from 'react'

// Redux integration
import { Provider } from 'react-redux'
import { persisitor, store } from '../redux/store'

// Page and components
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
import { PersistGate } from 'redux-persist/integration/react'



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
    element:  (<PrivateRoute><CheckOut /></PrivateRoute>)
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
    <Provider store={store}>
      <PersistGate persistor={persisitor} >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App