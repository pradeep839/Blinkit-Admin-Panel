import React from 'react'
import { useState } from 'react'
import { Mail, LockKeyhole } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rembember: false,
  })


  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;


    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const validate = () => {
    let newErrors = {};


    if (formData.email.trim() === "") {
      newErrors.email = "Email is compulsory";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "enter valid Email"
    };


    if (formData.password.trim() === "") {
      newErrors.password = "Password is complusory";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be min. 6 characters"
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };





  const handleSubmit = (e) => {
    e.preventDefault();


    if (validate()) {
      console.log(formData);

      setFormData({ email: "", password: "", remember: false });
      setErrors();

      navigate('/dashboard')




    }
  }

  return (
    <>


      <div className='flex justify-center items-center bg-[url("/src/assets/image.png")] bg-green-950 bg-no-repeat bg-cover h-screen px-4'>

        <div className='grid grid-cols-1 gap-3 '>
          <p className=' text-4xl md:text-6xl font-extrabold text-center'>blink<span className='text-[#25D366]'>it</span>
          </p>

          <p className='font-medium text-xl md:text-3xl text-center'>Admin Panel Login</p>

          <p className='text-gray-400  text-center text-sm md:text-lg'>Welcome back! Please login to your Account</p>



          <form
            onSubmit={handleSubmit}
          >


            <div className='relative'>
              {/* email */}
              <div className='absolute top-3 md:top-5 left-2 md:left-4 text-gray-500'>
                <Mail />
              </div>
              <input
                type="email"
                name='email'
                value={formData.email}
                placeholder='Email Address'
                onChange={handleChange}
                className='outline-none border border-gray-300 py-2 md:py-4 px-10 md:px-12 bg-white rounded-md text-xl  w-75 md:w-120 '
              />
              <p className='text-red-600 text-sm font-light pl-2'>{errors.email}</p>
            </div>

            <div className='relative mt-4'>
              {/* password */}
              <div className='absolute top-3 md:top-5 left-2 md:left-4 text-gray-500'>
                <LockKeyhole />
              </div>
              <input
                type="password"
                name='password'
                value={formData.password}
                placeholder='Password'
                onChange={handleChange}
                className='outline-none border border-gray-300 py-2 md:py-4 px-10 md:px-12 bg-white rounded-xl text-xl w-75 md:w-120'
              />
              <p className='text-red-600 text-sm font-light pl-2'>{errors.password}</p>
            </div>

 {/* remember */}
            <div className='mt-5 ml-1 flex items-center justify-between w-75 md:w-120' >
              <div className='flex items-center'>
              <input
                type="checkbox"
                name='remember'
                value={formData.rembember}
                onChange={handleChange}
                className=' w-4 md:w-5.5 h-4 md:h-5.5   mt-0.5 ml-1 mr-2'
              />
              <label className='font-medium text-sm md:text-lg'>

                Remember me
              </label>
</div>
              <p className='text-[#25D366] text-sm md:text-lg  hover:cursor-pointer'>Forgot Password?</p>


            </div>


            <button
              type="submit"
              className='text-center bg-[#25D366] text-white w-75 md:w-120 py-2 md:py-3 px-10 md:px-12 rounded-lg mt-4 text-lg hover:cursor-pointer'
            >
              Login
            </button>
          </form>

          <p className='text-center text-gray-400 mt-2 text-sm'>© 2004 Blinkit. All rights reserved</p>

        </div>


      </div>


    </>
  )
}

export default Login