import React from 'react'
import { Search, ChartColumnStacked, PackageSearch, ShoppingCart, UsersRound, ChevronDown, Apple, Bubbles, Popcorn, Beer, FileUser } from 'lucide-react'
import { useState } from 'react';
import { ResponsiveContainer, XAxis, YAxis, LineChart, Line, Tooltip, CartesianGrid } from 'recharts'

const Dashboard = () => {

    const orderData = [
        { date: '01 Aug', Orders: 1400 },
        { date: '02 Aug', Orders: 1000 },
        { date: '03 Aug', Orders: 1200 },
        { date: '04 Aug', Orders: 1350 },
        { date: '05 Aug', Orders: 900 },
        { date: '06 Aug', Orders: 950 },
        { date: '07 Aug', Orders: 800 },
        { date: '08 Aug', Orders: 1900 },
        { date: '09 Aug', Orders: 1700 },
        { date: '10 Aug', Orders: 500 },
        { date: '11 Aug', Orders: 850 },
        { date: '12 Aug', Orders: 1500 },
        { date: '13 Aug', Orders: 1200 },
        { date: '14 Aug', Orders: 1250 },
        { date: '15 Aug', Orders: 1800 },
        { date: '16 Aug', Orders: 1870 },
        { date: '17 Aug', Orders: 1780 },
        { date: '18 Aug', Orders: 1390 },
        { date: '19 Aug', Orders: 990 },
        { date: '20 Aug', Orders: 1000 },
        { date: '21 Aug', Orders: 1190 },
        { date: '22 Aug', Orders: 1230 },
        { date: '23 Aug', Orders: 770 },
        { date: '24 Aug', Orders: 1000 },
        { date: '25 Aug', Orders: 1060 },
        { date: '25 Aug', Orders: 1200 },
        { date: '25 Aug', Orders: 1680 },
        { date: '25 Aug', Orders: 1300 },
        { date: '25 Aug', Orders: 1200 },
        { date: '30 Aug', Orders: 1020 },
    ]

    const recentOrders = [
        { id: 'ORD123556', customer: 'Pradeep Dagar', amount: 5420, status: 'Delivered', date: '10Aug 2026, 10:30 AM' },
        { id: 'ORD123456', customer: 'Rahul Sharma', amount: 542, status: 'Delivered', date: '30 July 2026, 10:30 AM' },
        { id: 'ORD123457', customer: 'Priya Patel', amount: 890, status: 'Pending', date: '30 July 2026, 11:15 AM' },
        { id: 'ORD123458', customer: 'Amit Kumar', amount: 320, status: 'Delivered', date: '30 July 2026, 12:40 PM' },
        { id: 'ORD123459', customer: 'Sneha Gupta', amount: 1150, status: 'Cancelled', date: '30 July 2026, 1:05 PM' },
    ]

    const [open, setOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState("This Month");

    const handleSelect = (range) => {
        setSelectedRange(range);
        setOpen(false);
    };



    return (
        <>
            <div>
                <div className='flex items-center justify-between  shadow-xl h-15 md:h-20 md:w-full'>

                    <div>
                        <p className=' text-md md:text-2xl pl-6 md:pl-10 font-bold'>Dashboard</p>
                    </div>

                    <div className='flex items-center gap-4 md:gap-8 mr-4'>
                        <div className='flex items-center relative'>
                            <div className='absolute  text-gray-400 px-0 md:px-3'>
                                <Search size={22} />
                            </div>
                            <input
                                type="search"
                                placeholder='Search anything....'
                                className='outline-none border border-gray-200 rounded-lg pl-5 md:pl-10 pr-1 py-1 md:py-2.5 w-20 md:w-95 placeholder:text-sm md:text-md hover:border-gray-600'
                            />
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src="https://img.magnific.com/free-vector/business-user-shield_78370-7029.jpg?semt=ais_test_b&w=740&q=80" alt="d" className='w-10 h-10 rounded-full' />
                            <p className='text-lg font-medium'>Admin &#9660; </p>
                        </div>

                    </div>



                </div>


                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 ml-4 md:ml-8 mr-4 md:mr-8 '>

                    {/* total categories */}
                    <div className='flex items-center gap-2 md:gap-5 bg-violet-50 rounded-xl py-8  px-7'>
                        <div className='bg-violet-100 rounded-full p-3'>
                            <ChartColumnStacked color="#8b5cf6" size={30} />
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
                            <ShoppingCart color="#FF1D8D" size={30} />
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


                <div className='flex flex-col md:flex-row  gap-7 mt-10 ml-4 md:ml-8 mr-4 md:mr-8'>

                    <div className='border rounded  w-full md:w-2/3 h-auto md:h-100'>

                        {/* orders overview */}


                        <div className='flex justify-between '>
                            <p className='p-5 text-xl font-semibold'>Orders Overview</p>



                            {/* dropdown */}



                            <div className='relative m-5'>


                                <button
                                    type="button"
                                    onClick={() => setOpen((preview) => !preview)}
                                    className='hover:cursor-pointer flex items-center border rounded px-4 gap-2 test-sm md:text-md w-35 md:w-38'
                                >
                                    <p className='text-lg font-medium'>{selectedRange}</p>
                                    <ChevronDown size={16}
                                        className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                                </button>

                                {open && (
                                    <div className='absolute right-0 mt-2 w-38 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50'>
                                        <button
                                            type="button"
                                            onClick={() => handleSelect("This Month")}
                                            className='flex items-center  w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-blue-600 hover:text-white hover:cursor-pointer'
                                        >
                                            <p>This Month</p>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleSelect("This Week")}
                                            className='flex items-center  w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-blue-600 hover:text-white hover:cursor-pointer'
                                        >
                                            <p>This Week</p>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleSelect("This Year")}
                                            className='flex items-center  w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-blue-600 hover:text-white hover:cursor-pointer'
                                        >
                                            <p>This Year</p>
                                        </button>
                                    </div>
                                )}


                            </div>

                        </div>


                        {/* graph */}
                        <div className='w-full h-80 ml-2 mr-2 '>
                            <ResponsiveContainer width='96%' height='100%'>                      {/* measures the box */}
                                <LineChart data={orderData}>                                     {/* data */}
                                    <CartesianGrid />                                            {/* optional gridlines */}
                                    <XAxis dataKey={'date'} />                                   {/* labels along the bottom */}
                                    <YAxis />                                                    {/* numbers along the left side, auto-calculated */}
                                    <Tooltip />                                                  {/* hover popups */}
                                    <Line dataKey='Orders' stroke='#008000' strokeWidth={3} />   {/* the actual line, green colored */}
                                </LineChart>

                            </ResponsiveContainer>


                        </div>

                    </div>

                    <div className='border rounded  w-full md:w-1/3 h-auto md:h-100'>
                        <p className='p-5 text-xl font-semibold'>Top Categories</p>
                        <div className='ml-5 mr-5 mb-5 mt-3 flex flex-col  gap-4  ' >

                            {/* Fruits & VEgetables */}
                            <div className='flex   justify-between border-b border-gray-200 pb-2'>
                                <p className='flex text-lg font-medium gap-2 items-center tracking-wide'> <Apple size={20} color='#ebba0a' />Fruits & Vegetables</p>
                                <p className=' text-lg font-medium'>1,248</p>
                            </div>

                            {/* Dairy and food */}
                            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                                <p className='flex text-lg font-medium gap-2 items-center tracking-wide'> <Bubbles color='#eb0a82' />Dairy & Bread</p>
                                <p className=' text-lg font-medium'>982</p>
                            </div>

                            {/* Snacks & Munchies */}
                            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                                <p className='flex text-lg font-medium gap-2 items-center tracking-wide' > <Popcorn color='#ebba0a' />Snacks & Munchies</p>
                                <p className=' text-lg font-medium'>753</p>
                            </div>

                            {/* Beverages */}
                            <div className='flex items-center justify-between border-b border-gray-200 pb-2'>
                                <p className='flex text-lg font-medium gap-2 items-center tracking-wide'> <Beer color='#eb770a' />Beverages</p>
                                <p className=' text-lg font-medium'>753</p>
                            </div>

                            {/* Personal Care */}
                            <div className='flex items-center justify-between  '>
                                <p className='flex text-lg font-medium gap-2 items-center tracking-wide pb-2'> <FileUser color='#0a55eb' />Personal Care</p>
                                <p className=' text-lg font-medium'>753</p>
                            </div>


                            <button
                                type="button"
                                className='bg-gray-100 items-center justify-center w-full py-1.5 rounded-md hover:cursor-pointer hover:bg-gray-200 font-medium'>
                                View All
                            </button>
                        </div>

                    </div>
                </div>



                <div className=' border rounded m-4 md:m-8  overflow-x-auto'>


                    <div className='flex flex-wrap  justify-between items-center gap-3 p-5 '>
                        <p className=' text-xl font-semibold'>Reecent Orders</p>
                        <button
                            type="button"
                            className='bg-gray-100 px-4 py-1.5 rounded-md font-medium hover:cursor-pointer'
                        >
                            View All Orders
                        </button>
                    </div>

                    <div className='min-w-175'>

                        <div className='grid grid-cols-5 bg-gray-50 px-5 py-4  font-medium text-gray-600'>
                            <p>Order ID</p>
                            <p>Customer</p>
                            <p>Amount</p>
                            <p>Status</p>
                            <p>Date & Time</p>
                        </div>


                        {recentOrders.map((order) => (

                            <div
                                key={order.id}
                                className='grid grid-cols-5  px-5 py-4 border-t border-gray-100 '
                            >
                                <p className=' font-medium '>{order.id}</p>
                                <p className=' font-medium '>{order.customer}</p>
                                <p className=' font-medium '>₹{order.amount}</p>
                                <p className=''>
                                    <span className={` text-sm font-medium ${order.status === 'Delivered'
                                        ? 'text-green-700 bg-green-50 px-2 py-1 rounded-md' :
                                        order.status === 'Pending'
                                            ? 'text-yellow-700 bg-yellow-50 px-2 py-1 rounded-md' :
                                            'text-red-700 bg-red-50 px-2 py-1 rounded-md'
                                        }`}>
                                        {order.status}</span>
                                </p>
                                <p className=' font-medium '>{order.date}</p>

                            </div>
                        ))}




                    </div>
                </div>



            </div>

        </>
    )
}

export default Dashboard