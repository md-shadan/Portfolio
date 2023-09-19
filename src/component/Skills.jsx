import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/javascript.png'
import React_js from '../assets/react.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Cpp from '../assets/C++.png';
import C from '../assets/c.png';
import Python from '../assets/Python.webp';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Html} alt="html logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Html</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Css} alt="Css logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Css</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Js} alt="js logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={React_js} alt="React logo" className='w-20 mx-auto '/>
                    <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Node} alt="Node logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Firebase} alt="firebase logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind logo" className='w-20 mx-auto '/>
                    <p className='py-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Cpp} alt="c++ logo" className='w-20  mx-auto '/>
                    <p className='py-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={C} alt="c logo" className='w-20  mx-auto '/>
                    <p className='py-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Python} alt="python logo" className='w-20  mx-auto '/>
                    <p className='py-4'>Python</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills