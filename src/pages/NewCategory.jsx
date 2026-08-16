import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, Leaf, Calendar, Milk, Heart, House, Plus, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const NewCategory = () => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('Select Status')

    const handleselect = (status) => {
        setSelectedStatus(status);
        setOpen(false)
    };

    return (
        <>
            <div className='m-10'>
                <div>
                    <Link to='/categories'>
                        <p className='flex  items-center gap-2 text-md md:text-xl text-gray-500 font-medium hover:cursor-pointer hover:text-gray-600'> <ChevronLeft />Back to Categories</p>
                    </Link>
                </div>

                <div className='mt-5 md:mt-10'>
                    <p className=' text-3xl md:text-3xl font-semibold'>Add New Category</p>
                    <p className='mt-3 text-gray-500 text-lg font-medium tracking-wide'>Add a new category to organize your products.</p>
                </div>


                <div className='flex flex-col md:flex-row gap-8 md:gap-0  justify-between mt-5 md:mt-15'>
                    {/* category name */}
                    <div>
                        <div>
                            <label
                                className='text-lg md:text-2xl font-semibold'
                            >
                                Category Name
                                <span className='text-red-600'>*</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter category name'
                                className=' outline-none border border-gray-200 rounded-md mt-3 w-65 md:w-170 pl-2 py-2 md:py-3 text-xl'
                            />
                        </div>

                        {/* icon */}
                        <div className='mt-15 text-xl md:text-xl font-semibold'>
                            <p>
                                Icon
                                <span className='text-red-600'>*</span></p>

                            <p className='mt-2 text-gray-500 font-medium tracking-wide'>Chose an Icon</p>

                            <div className='flex items-center mt-5 gap-2 md:gap-5 ml-4'>
                                <div className='bg-green-50 border border-green-400 rounded-md p-1 md:p-4 hover:bg-green-100 hover:cursor-pointer'>
                                    <Leaf color="#038c25" size={30} />
                                </div>
                                <div className='bg-violet-50 border border-violet-400 rounded-md p-1 md:p-4 hover:bg-violet-100 hover:cursor-pointer'>
                                    <Calendar color="#47038c" size={30} />
                                </div>
                                <div className='bg-blue-50 border border-blue-400 rounded-md p-1 md:p-4 hover:bg-blue-100 hover:cursor-pointer'>
                                    <Milk color="#0060fa" size={30} />
                                </div>
                                <div className='bg-pink-50 border border-pink-400 rounded-md p-1 md:p-4 hover:bg-pink-100 hover:cursor-pointer'>
                                    <Heart color="#fa00cc" size={30} />
                                </div>
                                <div className=' border border-black-100 rounded-md p-1 md:p-4 hover:bg-gray-100 hover:cursor-pointer'>
                                    <House size={30} />
                                </div>
                                <div className=' border border-black-100 rounded-md p-1 md:p-4 hover:bg-gray-100 hover:cursor-pointer'>
                                    <Plus size={30} />
                                </div>
                            </div>
                        </div>


                        {/* status */}
                        <div className='mt-15'>
                            <p
                                className='text-lg md:text-2xl font-semibold '>
                                Status
                                <span className='text-red-600'>*</span>
                            </p>
                            <div className='relative '>
                                <button
                                    type="button"
                                    onClick={() => setOpen((preview) => !preview)}
                                    className='flex items-center justify-between border border-gray-200 rounded-md mt-3 test-sm md:text-md w-65 md:w-170  py-2 md:py-3 px-2'
                                >
                                    <p className='text-xl  '>{selectedStatus} </p>
                                    <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                                </button>

                                {open && (
                                    <div className='absolute left-0 z-50 w-65 md:w-170  mt-2 bg-white border border-gray-200 rounded-lg shadow-lg '>
                                        <button
                                            type="button"
                                            onClick={() => handleselect('Active')}
                                            className='flex items-center text-left px-4  w-full py-1 md:py-3 text-lg font-light text-gray-700 hover:bg-blue-600 hover:text-white hover:cursor-pointer '
                                        >
                                            Active
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => handleselect('Inactive')}
                                            className='flex items-center text-lg px-4  w-full py-1 md:py-3 font-light text-gray-700 hover:bg-blue-600 hover:text-white hover:cursor-pointer '
                                        >
                                            Inactive
                                        </button>
                                    </div>


                                )}
                            </div>
                        </div>


                        {/* save category */}
                        <div className='flex justify-between mt-17 md:mt-25'>
                            <button
                                type="button"
                                className='text-sm md:text-xl font-bold text-white bg-green-700 tracking-wide w-50 md:w-130 py-2 md:py-3 rounded-md hover:cursor-pointer hover:bg-green-600'
                            >
                                Save Category
                            </button>

                            <button type='button'
                                className='border rounded-md px-3 md:px-10 text-md md:text-xl hover:bg-gray-100 hover:cursor-pointer'
                            >
                                Cancel
                            </button>

                        </div>
                    </div>


                    {/* preview */}
                    <div className='border border-gray-300 rounded-md p-3 md:p-5 md:pl-8 w-70 md:w-120  h-85 md:h-130'>
                        <p className=' text-lg md:text-2xl font-semibold'>Preview</p>
                        <div className='flex justify-center md:mt-10'>
                            <div className='bg-green-50 border border-gray-200 rounded-xl p-4 md:p-18  hover:bg-green-100 hover:cursor-pointer '>
                                <Leaf color="#038c25" size={30} />
                            </div>

                        </div>
                        <div>
                            <p className='flex items-center justify-center mt-5 text-2xl'>Category Name</p>
                            <p className='flex justify-center items-cente mt-5  text-green-600 bg-green-50 border border-green-400 rounded-xl'>Active</p>
                        </div>


                        <p className='flex justify-center mt-15 text-gray-500'>This is how the category will appear</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default NewCategory