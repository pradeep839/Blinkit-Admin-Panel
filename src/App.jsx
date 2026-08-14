import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminLayout from './global/AdminLayout'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Users from './pages/Users'
import Settings from './pages/Settings'


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<AdminLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
        </Route>

      </Routes>

    </>
  )
}

export default App