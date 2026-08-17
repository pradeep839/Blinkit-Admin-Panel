import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const NewProduct = () => {
  return (
    <>

      <div className='m-10'>

        <div>
          <Link to='/products'>
            <p className='flex  items-center gap-2 text-md md:text-xl text-gray-500 font-medium hover:cursor-pointer hover:text-gray-600'> <ChevronLeft />Back to Categories</p>
          </Link>
        </div>

        <div className='mt-5 md:mt-5'>
          <p className=' text-3xl md:text-3xl font-semibold'>Add New Product</p>
          <p className='mt-3 text-gray-500 text-lg font-medium tracking-wide'>Add a new Product to your Inventory.</p>
        </div>



        <div className='grid grid-cols-[3fr_2fr] gap-4 mt-5 md:flex-row   justify-between '>

          <div className='border border-gray-200 rounded-md p-5 '>
            <p className=' text-lg md:text-2xl font-medium'>Product Information</p>
            <label
              className='text-lg md:text-xl font-semibold mt-5 '
            >
              Product Name
              <span className='text-red-600'>*</span>
            </label>

            <input
              type="text"
              placeholder='Enter product name'
              className=' outline-none border border-gray-200 rounded-lg mt-3 w-65 md:w-170 pl-4 py-2 md:py-3 text-xl'
            />


            <label
              className='text-lg md:text-xl font-semibold mt-5 '
            >
              Category
              <span className='text-red-600'>*</span>
            </label>

            <input
              type="text"
              placeholder='Enter product name'
              className=' outline-none border border-gray-200 rounded-lg mt-3 w-65 md:w-170 pl-4 py-2 md:py-3 text-xl'
            />
          </div>
          <div className='border border-gray-200 rounded-md'></div>
        </div>
      </div>

    </>
  )
}

export default NewProduct