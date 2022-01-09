import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image 
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
            height={400}
            width={400}
            objectFit='contain'
            alt="Image"
            />
            <h1 
            onClick={signIn}
            className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login
