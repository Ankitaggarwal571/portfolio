import Link from 'next/link'
import React from 'react'


export default function About() {
  return (
    <>
      <div id='about' className='w-full  p-2 flex items-center py-16'>
        <div className='max-w-[1240px]  m-auto  md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 px-16 w-full' >
              <p><span className='text-[#FBC407] pb-8 uppercase tracking-widest'>About</span></p>
              <h2 className='py-6'>Who I Am</h2>
              <p className='py-2'> I can creating interactive user interfaces for web applications using the React.js library and Next js . My expertise lies in combining my knowledge of HTML, CSS, and JavaScript with the React framework to build responsive and dynamic websites.</p>
              <p className='py-2'>Understanding of JavaScript, including ES6 syntax and modern development practices, as well as proficiency in using React and its related technologies like Redux, React Router, and JSX.</p>
              <p className='py-2'> I possess excellent problem-solving abilities, attention to detail, and a passion for delivering high-quality code that meets user needs. I collaborate effectively with designers, product managers, and other developers to create seamless user experiences that improve the overall functionality and usability of web applications.I am now spending my time building projects with React Js and Next js</p>
              <p className='underline py-2 cursor-pointer text-gray'><Link href="#projects">Check out of my projects</Link></p>
              <div className=' shadow-xl mx-6 my-8 hover:scale-105 duration-150 '>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='rounded-xl' alt="" />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
