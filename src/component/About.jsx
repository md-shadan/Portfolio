// import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                </div> 
                <div>
                </div>
            </div>
            <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right  font-bold text-[16px] ">
                    <p className=" text-left ">I'm a pre-final year B.Tech student with a passion for Full stack development. Proficient in HTML, CSS, JavaScript, and React, I'm dedicated to crafting innovative digital experiences.</p>
                </div>
                <div className="text-[16px] text-[#8892b0]">
                    <p>My goal is to actively contribute to dynamic projects and design user-centric interfaces. I'm committed to continually enhancing my skills while making meaningful contributions to the success of impactful projects. Let's collaborate and create something extraordinary.</p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default About