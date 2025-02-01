import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='bg-black max-w-full h-[12vh] text-white'>
                <ul className='flex justify-between items-center py-6 sm:py-4 px-9'>
                    <li className='text-4xl font-extrabold'>
                        LockVault
                    </li>
                    <li className='pr-14'>
                        github
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
