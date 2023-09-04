import React from 'react'

const Contacts = () => {
  return (
    <div name='Contacts' className='text-white w-full h-screen'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>Contact Me!</p>
            <p className='py-6'>Type your message in the form below:</p>
          </div>
          <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/36dd35cb-d5a5-46f5-a373-f593bc48c330" method="POST" className='flex flex-col w-full md:w-1/2 '>
              <input type="text" name='name' placeholder='Name' className='bg-transparent border-2 p-2 rounded-md focus:outline-none'/>
              <input type="text" name='email' placeholder='Email' className=' my-4 bg-transparent border-2 p-2 rounded-md focus:outline-none'/>
              <textarea name="message" rows="10" placeholder='Message' className='bg-transparent border-2 p-2 rounded-md focus:outline-none'></textarea>
              <button className='text-white bg-black rounded-md px-6 py-3 mx-auto my-8 flex  border-2 border-[#00FFFF] items-center hover:scale-110 duration-300'>Submit</button>

            </form>
          </div>

        </div>
    </div>
  )
}

export default Contacts