import React from 'react'

function HeaderIcon({ Icon, active }) {
    return (
        <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 md:active:border-b-2 border-blue-500 rounded-xl group'>
            <Icon className={`h-5 text-center sm:h-7 mx-auto group-hover:text-blue-500 text-gray-500 ${active && 'text-blue-500'}`}  />
        </div>
    )
}

export default HeaderIcon
