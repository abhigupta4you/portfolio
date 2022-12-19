import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'
import { MdEmail, MdCall } from 'react-icons/md'
function Contact() {
  return (
    <>
      <header>
        <nav>
          <ul className="md:flex flex-col gap-6">
            <nav className=" text-xl md:text-2xl text-white flex-justify-between ">

              <ul className="   sm:flex sm:space-x-8 justify-end  ">
                <li className="cursor-pointer hover:scale-125  duration-1000/2000 "> <Link to="/"> Main </Link></li>
                <li className="cursor-pointer hover:scale-125 duration-1000/2000 " > <Link to="/about"> About</Link></li>


              </ul>
            </nav>
          </ul>
        </nav>
      </header>
      <div className='bg-gradient-to-l from-lime-500 p-5  mb-5  md:w-screen'>
        <h2 className=' text-2xl md:text-4xl font-extrabold text-purple-600 '>Get in touch with me</h2>
       
        <div className='p-2 md:p-3 m-2 md:m-5 overflow-hidden  space-y-6 '>

          <h3 className='text-xl md:text-2xl flex gap-5 font-semibold '> <MdEmail />  abhigupta4you@gmail.com</h3>
          <h3 className='text-xl md:text-2xl flex gap-5 font-semibold'> <MdCall /> +91 8081404147</h3>
        </div>

      </div>
     
      <Social />
    </>
  )
}

export default Contact