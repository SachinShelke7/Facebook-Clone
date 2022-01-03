import Image from 'next/image'
import React from 'react'

function SidebarRow({ src, Icon, title }) {
    
    return (
        <div className='flex item-center space-x-2 p-4 hover:bg-gray-200'>
            {src && (
        <Image
        className="rounded-full"
        src={src}
        height={30}
        width={30}
        layout="fixed"
        alt='PPic'
      />
            )}
            {Icon && (
                <Icon className="h-8 w-8 text-blue-500" />
            )}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>

    )
}

export default SidebarRow
