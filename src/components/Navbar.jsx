import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='bg-black max-w-full h-[12vh] text-white'>
                <ul className='flex justify-between items-center py-6 sm:py-4 px-9'>
                    <li className='text-4xl font-extrabold'>
                        LockVault
                    </li>
                    <li className='pr-14 flex justify-center items-center gap-2 text-xl'>
                    <i className="fa-brands fa-github"></i>
                        <div>github</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
