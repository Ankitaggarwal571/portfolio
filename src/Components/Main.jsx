import Link from 'next/link'
import React from 'react'


export default function  () {
  return (
    <>
      <div id='home' className=" w-full text-center">
        <div className="max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center">
            <div className=''>
                <p className='uppercase text-sm tracking-widest'>Let's Bulid Something Together</p>
                <h1 className='pt-4 py-2 text-grey-700'>Hi, I am 
                    <span className='text-[#FBC407]'> Ankit</span>
                </h1>
                <h1 className=' pb-4 text-grey-700 '>
                    A Front-End Developer
                </h1>
                <p className='w-[60%] mx-auto'>
                    I am a front-end web developer specializing in bulinding (and occasionally designing) exceptional digital experiences. Currently, I am focused on buliding responsive front-end web applications while learning back-end technologies.
                </p>
               
            </div>
        </div>
      </div>
    </>
  )
}
