import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



export default function NavBar() {
    var [hide, sethide] = useState(false)
    function handle() {
        sethide(!hide)
    }
    return (
        <>
            <div className='sticky top-0 w-full h-19 shadow-xl  ease-in-out duration-300 ' style={{zIndex:"2 !important"}}>
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Image src="/assets/logo1.png" alt="/" height="50" width="125" />
                    <div>
                        <ul className='md:flex hidden '>
                            <Link href="/"><li className='ml-10 text-sm uppercase hover:border-b'>Home</li></Link>
                            <Link href="#about"><li className='ml-10 text-sm uppercase hover:border-b'>About</li></Link>
                            <Link href="#skills"><li className='ml-10 text-sm uppercase hover:border-b'>Skills</li></Link>
                            <Link href="#projects"><li className='ml-10 text-sm uppercase hover:border-b'>Project</li></Link>
                            <Link href="#contact"><li className='ml-10 text-sm uppercase hover:border-b'>Contact</li></Link>
                        </ul>
                        <div className='md:hidden' onClick={handle}>
                            <AiOutlineMenu size={33}  />
                        </div>
                    </div>
                </div>
                <div className={hide?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'  : ""}>
                    <div className={hide ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
                     :'fixed left-[-200%] top-0  p-10 ease-out duration-300'}>
                        <div>
                        <div className='flex w-full items-start justify-between'>
                            <Image src="/assets/logo1.png" width={90} height={35} />
                            <div onClick={handle} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>Let's bulid something legendary together </p>
                            </div>
                        </div >
                        <div className="py-4 flex-col">
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href='#about'>
                                    <li className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href='#skills'>
                                    <li className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href='#projects'>
                                    <li className='py-4 text-sm'>Projects</li>
                                </Link>
                                <Link href='#contact'>
                                    <li className='py-4 text-sm'>Contact</li>
                                </Link>
                            </ul>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
