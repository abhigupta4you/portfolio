import React from 'react'
import Social from './Social'

const handleClick = () => {
  alert("Oops! not available due to privacy issue :-)   Thank You!")
}
const abouteClick = () => {
  alert("this is a single page website (build on REACT js)")
}
function Main() {
  return (
    <>
      <div className='p-3 md:p-7'>
        <div className='md:flex justify-around'>

          <div className='text-xl md:text-2xl bg-inherit font-bold  text-purple-800'>I'm full-stack
            <span className='  hover:text-purple-800 text-lime-400 '> web developer</span>
            who crafts beautiful websites that help your business grow Online <br />
            <br /><br />
            <div className='space-y-6 md:space-y-0 md:flex  gap-7'>
              <button onClick={abouteClick} className='bg-purple-800 overflow-hidden shadow-2xl rounded-2xl text-white p-1 md:p-3 ml-36 font-serif text-xl hover:bg-lime-400'>
                About website </button>
              <button onClick={handleClick} className='bg-purple-800  overflow-hidden shadow-2xl rounded-2xl text-white p-1 md:p-3 ml-36 font-serif text-xl hover:bg-lime-400'>
                DOWNLOD CV </button>
            </div>
          </div>

          <div className=' p-20 md:p-0 w-full h-1/2 md:h-96 md:w-96  md:rounded-2xl '>
          
            <img src="images/viku.jpeg" className='rounded-3xl overflow-hidden'  alt="network issue" /></div>
            
        </div>

      </div>

      <Social />
    </>

  )

}

export default Main