import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-lg mt-10">Hi 👋, I am</p>
        <h1 className="text-5xl font-bold">Shubham Kumar</h1>
        <p className="text-red-500 text-xl font-semibold">Software Engineer / Full Stack Developer</p>
        <p className="text-gray-300 text-lg text-wrap max-w-5xl">
        Aspiring <span className="font-bold">Full-Stack developer </span>with hands-on experience in building web
        applications and solving real-world problems. Passionate about<span className="font-bold"> learning new tools 
          and technologies</span> and eager to contribute to dynamic projects in the tech industry.
        </p>
        <p className="text-gray-400">
          Currently, I am working with <span className="font-bold">ReactJS</span>, <span className="font-bold">Spring Boot(Java)</span> to build full-stack applications.
        </p>
        <div className='flex flex-wrap justify-center items-center space-x-6'>
            <a
            href="mailto:kumarshubhamgupta478@gmail.com"
            className="inline-block text-sm md:text-base px-6 py-3 rounded-full mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300"
            >
            Contact Me
            </a>
            <a
            href="/ShubhamKumar.pdf"  
            target="_blank"      
            rel="noopener noreferrer"  
            className="items-center inline-block text-sm md:text-base px-6 py-3 rounded-full mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300"
          >
            My Resume
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Home
