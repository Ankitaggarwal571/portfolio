import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/Components/NavBar'
import Main from '@/Components/Main'
import About from '@/Components/About'
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Contact from '@/Components/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankit | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </>
  )
}
