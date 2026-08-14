import React from 'react'
import { Search, ChartColumnStacked, PackageSearch, ShoppingCart, UsersRound } from 'lucide-react'

const Dashboard = () => {

    
    return (
        <>
            <div>
                <div className='flex items-center flex-1 flex-row gap-10 shadow-xl h-15 md:h-22 '>

                    <div>
                        <p className=' text-lg md:text-2xl pl-6 md:pl-10 font-bold'>Dashboard</p>
                    </div>

                    <div className='flex items-center relative ml-0 md:ml-160'>
                        <div className='absolute  text-gray-400 px-0 md:px-3'>
                            <Search size={22} />
                        </div>
                        <input
                            type="search"
                            placeholder='Search anything....'
                            className='outline-none border border-gray-200 rounded-lg pl-5 md:pl-10 pr-1 py-2.5 w-20 md:w-90 placeholder:text-sm md:text-md hover:border-gray-600'
                        />
                    </div>

                    <div className='flex items-center ml-5 md:ml-15'>
                        <img src="https://img.magnific.com/free-vector/business-user-shield_78370-7029.jpg?semt=ais_test_b&w=740&q=80" alt="d" className='w-10 h-10 rounded-full' />
                        <p className='text-lg font-medium'>Admin &#9660; </p>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 ml-4 md:ml-8 mr-4 md:mr-8 '>

                    {/* total categories */}
                    <div className='flex items-center gap-2 md:gap-5 bg-violet-50 rounded-xl py-8  px-7'>
                        <div className='bg-violet-100 rounded-full p-3'>
                            <ChartColumnStacked  color="#8b5cf6" size={30} />
                        </div>
                        <div>
                            <p className=' text-sm md:text-lg font-medium text-violet-500'>Total Categories</p>
                            <p className=' text-lg md:text-2xl font-semibold'>36</p>
                        </div>

                    </div>


                    {/* total products */}
                    <div className='flex items-center gap-2 md:gap-5 bg-amber-50 rounded-xl py-8  px-7'>
                        <div className='bg-amber-100 rounded-full p-3'>
                            <PackageSearch color='#d97706' size={30} />
                        </div>
                        <div>
                            <p className='text-sm md:text-lg font-medium text-amber-600'>Total Products</p>
                            <p className=' text-lg md:text-2xl font-semibold'>1,248</p>
                        </div>
                    </div>


                    {/* total orders */}
                    <div className='flex items-center  gap-2 md:gap-5 bg-rose-50 rounded-xl py-8  px-7'>
                        <div className='bg-rose-100 rounded-full p-3'>
                            <ShoppingCart color="#FF1D8D"  size={30} />
                        </div>
                        <div>
                            <p className='text-sm md:text-lg font-medium text-rose-500'>Total Orders</p>
                            <p className=' text-lg md:text-2xl font-semibold'>5,862</p>
                        </div>
                    </div>



                    {/* total users */}
                    <div className='flex items-center gap-2 md:gap-5 bg-blue-50 rounded-xl py-8  px-7'>
                        <div className='bg-blue-100 rounded-full p-3'>
                            <UsersRound color='#1e40af' size={30} />
                        </div>
                        <div>
                            <p className='text-sm md:text-lg font-medium text-blue-800'>Total Users</p>
                            <p className=' text-lg md:text-2xl font-semibold'>2,356</p>
                        </div>
                    </div>

                </div>


                <div className='flex gap-7 mt-10 ml-4 md:ml-8 mr-4 md:mr-8'>

                    <div className='border rounded'></div>

                    <div className='border rounded'></div>
                </div>




            
            </div>

        </>
    )
}

export default Dashboard