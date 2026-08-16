import React from 'react'
import { categories } from '../global/data'
import * as Icons from 'lucide-react'
import { Search, SquarePen, Trash, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {
  const IconComponent = Icons[categories.icon];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categories.slice(startIndex, startIndex + itemsPerPage);




  return (
    <>

      <div>

        {/* category managment */}
        <div className='flex items-center justify-between shadow-xl h-15 md:h-20 md:w-full'>

          <div>
            <p className=' text-md md:text-2xl pl-2 md:pl-10 font-bold'>Category Managment</p>
          </div>

          <div>
            <Link to='/new/category'>
              <button
                type="button"
                className='mr-2 md:mr-10 text-sm md:text-xl font-bold text-white bg-green-700 tracking-wide px-3 md:px-6 py-2 md:py-3 rounded-md hover:cursor-pointer hover:bg-green-600'
              >
                + Add Category
              </button>
            </Link>
          </div>
        </div>


        {/* search category */}
        <div className='flex justify-left items-center mt-10 ml-5 md:ml-10 mr-5'>
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
        </div>


        {/* categories */}

        <div className='m-10 border border-gray-200 rounded-md overflow-x-auto'>

          <div className='min-w-175'>
            <div className='grid grid-cols-5 gap-10  bg-gray-50 px-10 py-4 font-medium text-gray-600'>
              <p>Category Name</p>
              <p>Icon</p>
              <p>Status</p>
              <p>Products</p>
              <p>Actions</p>

            </div>

            {paginatedCategories.map((categ) => {
              const IconComponent = Icons[categ.icon]
              return (
                <div key={categ.id}
                  className='grid grid-cols-5 gap-3 md:gap-10 px-10 py-4 border-b border-gray-100 items-start md:items-center font-medium'
                >
                  <p>{categ.name}</p>
                  <p>{IconComponent && <IconComponent color={categ.color} />} </p>
                  <p>
                    <span className={`text-sm px-1.5 py-1 rounded ${categ.status === 'Active'
                      ? ' text-green-700 bg-green-100 ' :
                      'text-red-700 bg-red-100'
                      }`}>
                      {categ.status}
                    </span>
                  </p>
                  <p >{categ.products}</p>

                  <p className='flex gap-2'>
                    <SquarePen size={20} className='hover:text-blue-600 hover:cursor-pointer hover:border-b' />
                    <Trash size={20} className='hover:text-red-600 hover:cursor-pointer hover:border-b' />
                  </p>
                </div>
              )
            })}

          </div>
        </div>
        {/* pagination controls */}
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

export default Categories