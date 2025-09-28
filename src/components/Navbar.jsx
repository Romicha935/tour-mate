import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-green-500 text-white p-4 flex items-center justify-between'>
            <h1 className='text-xl font-bold'>Tour Mate</h1>
            <ul className='flex gap-6'>
                <li className=''><a href="/" className='hover:underline'>Home</a></li>
                <li className=''><a href="/" className='hover:underline'>About</a></li>
                <li className=''><a href="/" className='hover:underline'>Card</a></li>
                <li className=''><a href="/" className='hover:underline'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar