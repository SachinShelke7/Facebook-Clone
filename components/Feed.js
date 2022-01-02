import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
           <div className='mx-auto'>
            {/* Stories */}
            <Stories />
            {/* InputBox */}
            <InputBox />
            {/* Posts */}
            <Posts />
           </div>

        </div>
    )
}

export default Feed
