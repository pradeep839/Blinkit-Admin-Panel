import React from 'react'
import { Outlet } from "react-router-dom";
import AdminSideBar from './AdminSideBar';


const AdminLayout = () => {
  return (
  <>
  <div className='flex h-screen overflow-hidden'>
  <AdminSideBar/>
    <main className='flex-1   min-w-0  overflow-y-auto'>
  <Outlet/>
  </main>
  </div>
  
  </>
  )
}

export default AdminLayout