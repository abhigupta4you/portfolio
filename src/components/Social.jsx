import React from 'react'
import{ BsTwitter,BsLinkedin,BsGithub } from 'react-icons/bs'
function Social() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  -mx-px px-10 md:py-16 py-6 text-white  '>
      
        <p className=' text-xl md:text-4xl text-center '> Social Media Handles</p>
        <div className='flex space-y-10 md:space-x-48 flex-col sm:flex-row  mt-16'>
            <br />
        <div  > 
            <h3>Follow On </h3>
            <br />
            <a href="https://twitter.com/Abhishek44you?t=U9GG3HOOoQJ1HvxtHFZufw&s=09">
            <p className='md:text-4xl cursor-pointer'>
              <BsTwitter />
                </p>
                </a>
        </div>
        <div>
            
        <h3>Connect On </h3>
            <br />
            <a href="https://www.linkedin.com/in/abhishek-gupta-00643722a">
            <p className='md:text-4xl cursor-pointer'>
            <BsLinkedin/>
            </p>
            </a>

        </div>
        <div > 
            <h3>See my code </h3>
            <br />
            <a href="https://github.com/abhigupta4you">
              <p className='md:text-4xl cursor-pointer'>
                <BsGithub/>
              </p>
              </a>
        </div>
        </div>
    </div>
  )
}

export default Social