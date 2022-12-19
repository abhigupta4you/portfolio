import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'
function About() {
  return (
    <>
      <header>
        <nav>
          <ul className="md:flex flex-col gap-6">
            <nav className=" text-xl md:text-2xl text-white flex-justify-between ">

              <ul className="   sm:flex sm:space-x-8 justify-end  ">
                <li className="cursor-pointer hover:scale-125  duration-1000/2000 "> <Link to="/"> Main</Link></li>

                <li className="cursor-pointer hover:scale-125 duration-1000/2000 "> <Link to="/contact"> Contact</Link></li>

              </ul>
            </nav>
          </ul>
        </nav>
      </header>
      <div className='bg-gradient-to-r from-lime-400    p-5 md:p-14  mb-5 w-screen'>
        <h3 className='font-bold  text-2xl md:text-4xl mb-3 text-purple-500'>About Me</h3>
        <p className='bg-white text-purple-500 font-serif p-3 md:p-5 mr-3 text-xl md:text-2xl'>I'm a REACT developer, aiming to became a full stack developer</p>
        <p className='bg-white text-purple-500 font-serif p-3 md:p-5 mr-3 text-xl md:text-2xl'> Right now! I'm pursuing my BCA graduation from Dr Ram Manohar Lohia Avadh University, AYODHYA (U.P.)
        
       
        </p>
        <p className='bg-white text-purple-500 font-serif p-3 mr-3  md:p-5 text-xl md:text-2xl'>
        I believe in learning by practicing, i have <span className='font-bold text-purple-700'> uploaded all my project on Github </span> </p>  
       
        <div className=' space-y-2 md:flex md:justify-around mt-2'>
          <div className=' p-1 font-sans md:p-3 text-center rounded-full  hover:bg-purple-700 bg-yellow-300'>#react_developer</div>
          <div className='p-1 md:p-3 text-center rounded-full hover:bg-orange-500 bg-yellow-500'>#mern_stack</div>
          <div className='p-1 md:p-3 rounded-full text-center hover:bg-cyan-400 bg-yellow-300'>#frontend</div> 
        </div>
      </div>
      <Social/>
    </>
  )
}

export default About