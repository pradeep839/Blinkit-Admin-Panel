import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, Funnel, SquarePen, Trash, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { products } from '../global/data'

const Products = () => {

  const [selectedCategory, setSelectedCategory] = useState('All Categories')



  const handleSelect = (category) => {
    setSelectedCategory(category);
    setOpenDropdown(null);
  }



  const [selectedStatus, setSelectedStatus] = useState('All Status')


  const handleChoose = (status) => {
    setSelectedStatus(status);
    setOpenDropdown(null);
  }




  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);





  const [openDropdown, setOpenDropdown] = useState(null); // null | 'category' | 'status'
  return (
    <>

      <div>

        <div className='flex items-center justify-between shadow-xl h-15 md:h-20 md:w-full'>

          <div>
            <p className=' text-md md:text-2xl pl-2 md:pl-10 font-bold'>Product Managment</p>
          </div>

          <div>
            <Link to='/new/product'>
              <button
                type="button"
                className='mr-2 md:mr-10 text-sm md:text-xl font-bold text-white bg-green-700 tracking-wide px-3 md:px-6 py-2 md:py-3 rounded-md hover:cursor-pointer hover:bg-green-600'
              >
                + Add Product
              </button>
            </Link>
          </div>
        </div>




        <div className='m-10 flex flex-col md:flex-row gap-3 md:gap-1 md:items-center justify-between overflow-x-auto scrollbar-thin'>


          {/* search */}
          <div className='flex items-center relative'>
            <div className='absolute  text-gray-400 px-1 md:px-3'>
              <Search size={22} />
            </div>
            <input
              type="search"
              placeholder='Search category...'
              className='outline-none border border-gray-200 rounded-lg pl-8 md:pl-10 pr-1 py-2 md:py-2.5 w-65 md:w-95  md:text-md hover:border-gray-600'
            />
          </div>



          {/* all categories */}

          <div className='relative'>

            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
              className='flex items-center justify-between border border-gray-200 rounded-lg pl-2 md:pl-4 pr-1 py-2 md:py-2.5 w-55 md:w-85  md:text-md'
            >
              <p className='text-xl  '>{selectedCategory} </p>
              <ChevronDown className={`transition-transform ${openDropdown === 'category' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'category' && (
              <div className='border border-gray-200 absolute left-0 z-50 bg-white shadow-xl w-full  '>

                <button
                  type="button"
                  onClick={() => handleSelect('Fruits & Vegetables')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1 '
                >
                  Fruits & Vegetables
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect('Dairy & Bread')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1'
                >
                  Dairy & Bread
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect('Snacks & Munchies')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1'
                >
                  Snacks & Munchies
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect('Beverages')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1'
                >
                  Beverages
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect('Personal Care')}
                  className=' font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1'
                >
                  Personal Care
                </button>


              </div>
            )}

          </div>






          {/* all status */}
          <div className='relative z-50' >

            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'status' ? null : 'status')}
              className='flex items-center justify-between border border-gray-200 rounded-lg pl-2 md:pl-4 pr-1 py-2 md:py-2.5 w-55 md:w-85  md:text-md'
            >
              <p className='text-xl  '>{selectedStatus} </p>
              <ChevronDown className={`transition-transform ${openDropdown === 'status' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'status' && (
              <div className='border border-gray-200 absolute left-0 z-50 bg-white shadow-xl w-full  '>

                <button
                  type="button"
                  onClick={() => handleChoose('Active')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1 '
                >
                  Active
                </button>

                <button
                  type="button"
                  onClick={() => handleChoose('Inactive')}
                  className='text-lg font-light text-left hover:bg-blue-500 hover:text-white w-full px-2 py-1 '
                >
                  Inactive
                </button>
              </div>
            )}

          </div>



          {/* filter */}
          <div className='relative z-10 flex items-center justify-between border border-gray-200 rounded-lg px-10  pr-1 py-2 md:py-2.5 mr-20 md:w-30 text-xl hover:cursor-pointer hover:bg-gray-50'>
            <div className='absolute left-2'>
              <Funnel />
            </div>
            <p>Filter</p>
          </div>

        </div>


        {/* products */}
        <div className='m-10 border border-gray-200 rounded-md  overflow-x-auto'>

          <div className='min-w-175'>
            <div className='flex justify-between gap-10  bg-gray-50 px-10 py-4 font-medium text-gray-600 '>
              <p className='w-1/6'>Product Name</p>
              <p className='w-1/6'>Category</p>
              <p className='w-1/6'>Price</p>
              <p className='w-1/6'>Stock</p>
              <p className='w-1/6'>Status</p>
              <p className='w-1/6'>Actions</p>

            </div>



            {paginatedProducts.map((prod) => {
              return (
                <div
                  key={prod.id}
                  className='flex  gap-3 md:gap-10 px-10 py-8 border-b border-gray-100 justify-between  items-center font-medium'
                >
                  <p className='truncate w-1/6'>
                    {prod.name}</p>
                  <p className='w-1/6'>{prod.category}</p>
                  <p className='w-1/6'>${prod.price}</p>
                  <p className='w-1/6'>{prod.stock}</p>
                  <p className='w-1/6'>
                    <span className={`text-sm px-1.5 py-1 rounded ${prod.status === 'Active'
                      ? ' text-green-700 bg-green-100 ' :
                      'text-red-700 bg-red-100'
                      }`}>
                      {prod.status}
                    </span>
                  </p>
                  <p className='flex gap-2 w-1/6'>
                    <SquarePen size={20} className='hover:text-blue-600 hover:cursor-pointer hover:border-b' />
                    <Trash size={20} className='hover:text-red-600 hover:cursor-pointer hover:border-b' />
                  </p>

                </div>
              )
            })}




          </div>

        </div>



        {/* pagination */}

        <div className='flex items-center justify-between m-10 overflow-x-auto'>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <ChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={` px-3 py-1 rounded-md  font-medium hover:cursor-pointer ${currentPage === page
                ? 'bg-green-700 text-white' :
                'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            <ChevronRight />
          </button>
        </div>















      </div>

    </>
  )
}

export default Products