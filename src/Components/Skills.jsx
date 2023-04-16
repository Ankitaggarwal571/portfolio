import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <>
      <div id='skills' className='w-full p-2 py-20'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <div className="px-12">
                <p className='uppercase text-[#FBC407] tracking-widest pb-4 '>Skills</p>
                <h2 className='py-3 uppercase tracking-widest'>What I Can Do</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/html.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                     </div>                   
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/css.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                     </div>                   
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/javascript.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                     </div>                   
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/react.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                     </div>                   
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/nextjs.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT JS</h3>
                        </div>
                     </div>                   
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                     <div className='grid grid-cols-2 py-6  gap-4 justify-center items-center'>
                        <div className="m-auto ">
                            <Image src="/assets/skills/bootstraplogo.png" alt="/"  width={60} height={60} className=''/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>BOOTSTRAP </h3>
                        </div>
                     </div>                   
                </div>

               </div>
            </div>
        </div>
      </div>
    </>
  )
}
