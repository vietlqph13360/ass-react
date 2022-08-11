import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductAdminPage from './pages/Admin/Product/product'
import AdminLayout from './components/Layout/admin'
import UserLayout from './components/Layout/user'
import AddProductPage from './pages/Admin/Product/add'
import EditProduct from './pages/Admin/Product/edit'
import CategoriesPage from './pages/Admin/Category/category'
import AddCategoryPage from './pages/Admin/Category/add'
import EditCategoryPage from './pages/Admin/Category/edit'
import HomePage from './pages/client'
import ProductDetail from './pages/client/productDetail'
import Login from './pages/client/login'
import Register from './pages/client/register'
import Cart from './pages/client/cart'
import PrivateRoute from './pages/client/PrivateRoute'

function App(props: any) {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
        </Route>
        {/* Admin layout */}
        <Route path='admin' element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route path='products'>
            <Route index element={<ProductAdminPage/>}/>
            <Route path='add' element={<AddProductPage/>}/>
            <Route path='edit/:id' element={<EditProduct/>}/>
          </Route>
          <Route path='categories'>
            <Route index element={<CategoriesPage/>}/>
            <Route path='add' element={<AddCategoryPage/>}/>
            <Route path='edit/:id' element={<EditCategoryPage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
