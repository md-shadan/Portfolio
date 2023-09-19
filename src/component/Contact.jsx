import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen text-gray-300 flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/b23a8ba7-435d-421a-a9a8-7f174c749994" className='max-w-[600px] w-full flex flex-col '>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Contact</p>
                <p className='text-gray-300 py-4'>submit form below to contact with me</p>
            </div>
            <input className='bg-[#ccd6f6] text-base p-2 text-black' type="text" placeholder='Name' name='name' required />
            <input className='bg-[#ccd6f6] text-base my-4 p-2 text-black' type="email" placeholder='Email' name='email' required/>
            <textarea className='p-2 text-base bg-[#ccd6f6] text-black' name="message" rows="10" placeholder='Message' required></textarea>
            <a href="#">
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex justify-center items-center text-base'>
                Let collaborate
            </button>
            </a>
        </form>
    </div>
  )
}

export default Contact