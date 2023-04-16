import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


export default function Contact() {
  return (
    <>
      <div id='contact' className='w-[70%] m-auto pb-16'>
        <h1 className='pb-16 '>My Contact Details</h1>
         <div className="flex w-100">
         <h3 className="border w-[50%] text-center p-3">Name</h3>
         <h3 className="border w-[50%] text-center p-3">Ankit</h3>
         </div>

         <div className="flex w-100">
         <h3 className="border w-[50%] text-center p-3">E-mail</h3>
         <h3 className="border w-[50%] text-center p-3"><Link href="mailto:ankitaggarwal571@gmail.com" target='blank'>Ankitaggarwal571@gmail.com</Link></h3>
         </div>

         <div className="flex w-100">
         <h3 className="border w-[50%] text-center p-3">Phone</h3>
         <h3 className="border w-[50%] text-center p-3">9079650645</h3>
         </div>
          </div>
    </>
  )
}
