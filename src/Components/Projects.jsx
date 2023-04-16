
import Link from 'next/link'
import React from 'react'

export default function Projects() {
  
  return (
    <>
      <div id='projects' className='w-full  pt-20'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center ">
          <div className="px-12">
            <p className='uppercase text-[#FBC407] tracking-widest pb-4 '>Projects</p>
            <h2 className='py-3 uppercase tracking-widest'>What I've Bulit</h2>
            <div className="grid py-8 md:grid-col-2">

              <div className='relative flex items-center justify-center shadow-xl rounded-xl  w-[70%] mx-auto h-[60%] group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
                <img className='rounded-xl group-hover:opacity-10 h-[100%]' src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt=""  width="100%"  /> 
                <div className='absolute hidden group-hover:block text-[white]'>
                  <h2 className='uppercase tracking-widest'>E-Commerce </h2>
                  <h4>Using React Redux, Saga and Api</h4>
                  <Link href='https://eshoopers.netlify.app/' target='blank'><p className='bg-white rounded-lg text-[black] text-center p-2 my-3'>Go To Website</p></Link>
                  <Link href='https://github.com/Ankitaggarwal571/E-Commers' target='blank'><p className='bg-white rounded-lg text-[black] text-center p-2 my-3'>Get Github Code</p></Link>
                </div>           
              </div>

              <div className='relative flex items-center justify-center shadow-xl rounded-xl  w-[70%] mx-auto h-[60%]  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
                <img className='rounded-xl group-hover:opacity-10 h-[100%]' src="https://st2.depositphotos.com/1032577/6582/i/600/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg" alt=""  width="100%"  /> 
                <div className='absolute hidden group-hover:block text-[white]'>
                  <h2 className='uppercase tracking-widest'>Portfolio </h2>
                  <h4>Using Next.js and Tailwind</h4>
                  <Link href='' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Go To Website</p></Link>
                  <Link href='' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Get Github Code</p></Link>
                </div>           
              </div>

              <div className='relative flex items-center justify-center shadow-xl rounded-xl  w-[70%] mx-auto h-[70vh] group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] mb-36'>
                <img className='rounded-xl group-hover:opacity-10 h-[70vh]' src="https://media.istockphoto.com/id/1409271522/photo/the-mans-hands-are-holding-black-with-yellow-clapper-board-or-movie-slate-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=vb-Ae8pOyZ3VwIJjqj5mv1gud1bWrntZxAsMFOIlEpc=" alt=""  width="100%"  /> 
                <div className='absolute hidden group-hover:block text-[white]'>
                  <h2 className='uppercase tracking-widest'>Search Movie Detail </h2>
                  <h4>Using React And OMBD Api</h4>
                  <Link href='https://moviemania571.netlify.app' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Go To Website</p></Link>
                  <Link href='https://github.com/Ankitaggarwal571/movieMania' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Get Github Code</p></Link>
                </div>           
              </div>

              <div className='relative flex items-center justify-center shadow-xl rounded-xl  w-[70%] mx-auto h-[60%] group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] my-16 mb-8 '>
                <img className='rounded-xl group-hover:opacity-10 h-[100%]' src="https://cdn.wallpapersafari.com/49/28/vDFNZl.jpg" alt=""  width="100%"  /> 
                <div className='absolute hidden group-hover:block text-[white]'>
                  <h2 className='uppercase tracking-widest'>News App </h2>
                  <h4>Using React and News-Api</h4>
                  {/* <Link href='' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Go To Website</p></Link> */}
                  <Link href='https://github.com/Ankitaggarwal571/NewsApp' target='blank'><p className=' bg-white rounded-lg text-[black] text-center p-2 my-3'>Get Github Code</p></Link>
                </div>           
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
