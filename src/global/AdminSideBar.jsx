import React from 'react'
import { LayoutDashboard, ChartColumnStacked, PackageSearch, Logs, User, Settings, LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminSideBar = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        navigate('/')
    }


    return (
        <>
            <div className='bg-green-950  w-16 md:w-70 h-screen flex flex-col shrink-0' >
                <p className='text-gray-50 text-sm md:text-4xl font-extrabold md:text-left  md:pl-4 pt-5 text-center'>blink<span className='text-[#00d24d]'>it</span>
                </p>

                <nav className='text-gray-50 flex-1 mt-8 md:mt-10 px-2 md:px-4 flex flex-col   text-xl'>

                    {/* dashboard */}
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            `flex items-center gap-3  px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <LayoutDashboard size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Dashboard</span>
                    </NavLink>


                    {/* categories */}
                    <NavLink
                        to='/categories'
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <ChartColumnStacked size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Categories</span>
                    </NavLink>



                    {/* products */}
                    <NavLink
                        to='/products'
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <PackageSearch size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Products</span>
                    </NavLink>



                    {/* orders */}
                    <NavLink
                        to='/orders'
                        className={({ isActive }) =>
                            `flex items-center gap-3  px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <Logs size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Orders</span>
                    </NavLink>



                    {/* users */}
                    <NavLink
                        to='/users'
                        className={({ isActive }) =>
                            `flex items-center gap-3  px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <User size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Users</span>
                    </NavLink>



                    {/* settings */}
                    <NavLink
                        to='/settings'
                        className={({ isActive }) =>
                            `flex items-center gap-3  px-3 py-4 rounded-lg text-sm md:text-lg tracking-wide
                    ${isActive ? 'bg-[#355E3B] text-gray-50 font-medium' : 'text-gray-200 hover:bg-white/10'
                            }`}
                    >
                        <Settings size={23} className='shrink-0 ' />
                        <span className='hidden md:inline'>  Settings</span>
                    </NavLink>




                </nav>



                <button
                    type="button"
                    onClick={handleLogout}
                    className='flex items-center gap-3  px-3 py-3 mx-2 md:mx-4 mb-6 rounded-lg text-gray-200 hover:bg-white/10 text-sm md:text-lg hover:cursor-pointer'
                >
                    <LogOut size={20} className='shrink-0' />
                    <span className='hidden md:inline'>Logout</span>
                </button>
            </div>




        </>
    )
}

export default AdminSideBar