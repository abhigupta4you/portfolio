import React from "react"
import { Link } from "react-router-dom"


function Header() {
  return (
    <div className='bg-purple-700  text-white justify-between  m-0 p-6 flex'>
      <div className="sm:text-start"> Here is my <br /> <span className="md:text-4xl text-2xl  font-serif text-lime-300  ">Portfolio website</span>
      </div>
      <div>
        <header>
          <nav>
            <ul className="hidden md:flex item-center p-6 space-x-5  md:font-bold text-2xl cursor-pointer">
              <li className="cursor-pointer hover:scale-125  duration-1000/2000 "> <Link to="/"> Main </Link></li>
              <li className="cursor-pointer hover:scale-125 duration-1000/2000 " > <Link to="/About"> About</Link> </li>
              <li className="cursor-pointer hover:scale-125 duration-1000/2000 "> <Link to="/Contact"> Contact</Link></li>
            </ul>
            <button className="block md:hidden py-3 px-4 mx-4 rounded  focus:outline-none hover:bg-grey-200 group">
              <div className="w-5 h-1 bg-lime-400 mb-1"></div>
              <div className="w-5 h-1 bg-lime-400 mb-1"></div>
              <div className="w-5 h-1 bg-lime-400 "></div>
              <div className="absolute top-0 -right-full h-screen w-8/12  bg-gradient-to-l  from-indigo-500 to-pink-500 border transform
                             group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
               <ul className="flex flex-col items-center w-full text-base space-y-10 cursor-pointer pt-10">

                  <li className="cursor-pointer text-lime-400 font-bold hover:scale-125  duration-1000/2000 "> <Link to="/"> Main </Link></li>
                  <li className="cursor-pointer  text-lime-400 font-bold hover:scale-125 duration-1000/2000 " > <Link to="/About"> About</Link> </li>
                  <li className="cursor-pointer  text-lime-400 font-bold hover:scale-125 duration-1000/2000 "> <Link to="/Contact"> Contact</Link></li>
                </ul>
               
              </div>
            </button>

          </nav>
        </header>
      </div>
    </div>

  )
}

export default Header