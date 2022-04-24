import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import Person from '../assets/png/avatar.png'
import { Steps } from '../components/Pages/Home'
import { Header } from '../components/Header/Header'

const menuItems = ['Home', 'Story', 'About']
const activeMenu = 'Home'

const Home: NextPage = () => {
  return (
    <div className='relative '>
      <section className='sticky w-full min-h-screen text-white bg-gradient-to-b dark:from-slate-800 dark:to-gray-900 from-slate-50 to-slate-100 '>
        <div className='w-full h-2 bg-orange-500 dark:bg-orange-600' />
        <Header />

        <div className="container relative px-4 pt-8 mx-auto sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 lg:pb-6">
          <div className="flex flex-col max-w-full gap-4 lg:max-w-xl">
            <h1 className='text-6xl font-bold leading-tight text-slate-800 dark:text-white'>
            Perfect your <br /> own <span className='text-orange-500'>RNG</span>
            </h1>
            <p className='text-slate-500 dark:text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi fuga exercitationem ut itaque ducimus
            eveniet natus doloribus obcaecati rerum assumenda
            quisquam alias dolorum nisi.
            </p>
            <div className='flex gap-4'>
              <button className='px-8 py-2 mt-5 font-bold bg-orange-600 rounded-md w-fit '>
                GET STARTED
              </button>
              <button className='px-8 py-2 mt-5 font-bold text-orange-600 border-2 border-orange-600 rounded-md w-fit '>
                GET STARTED
              </button>
            </div>

          </div>
          <div className='absolute hidden max-w-lg top-8 right-16 lg:block'>
            <Image src={Person} alt="avatar" />
          </div>
        </div>

        <Steps />
      </section>

      <section className='min-h-screen font-bold text-center bg-slate-100 dark:bg-gray-900 snap-x snap-mandatory'>
        Another Section
      </section>

    </div>

  )
}

export default Home

export const HomePage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full min-h-screen overflow-hidden text-white bg-gray-700 bg-gradient-to-br from-transparent to-gray-900">
      <Head>
        <title>Genshin Guru | Oficial</title>
      </Head>
      <div className="relative px-8 py-10 mx-auto space-y-4 max-w-7xl ">
        <nav className='flex items-center justify-between'>
          <a href="#" className='text-2xl font-semibold'>Genshin Guru</a>
          <div className='flex-row hidden lg:flex gap-x-24'>
            <ul className='flex flex-row items-center text-lg font-medium tracking-wider gap-x-16'>
              {
                menuItems.map(item => {
                  return <li key={item} className={activeMenu === item ? 'text-orange-500 group' : 'group'} >
                            <Link href={item === 'Home' ? '' : item.toLowerCase()}>{item}</Link>
                            <div className="h-0.5 bg-orange-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-500"></div>
                          </li>
                })
              }
            </ul>
            <Link href="/login" passHref>
              <a className='flex items-center text-lg font-medium tracking-wider'>

                <span className='ml-2'>Login</span>
              </a>

            </Link>

          </div>
          <div className='relative z-30 block lg:hidden design-button' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </nav>

        <div className='flex flex-col items-center flex-1 gap-10 pt-10 lg:flex-row lg:gap-5'>

        </div>
        <div className='w-full pt-2 font-medium text-center'>
        ... or <span className='text-blue-400'>Enter as Guest</span>
        </div>
        <div className='w-full pt-1 text-sm font-medium text-center text-gray-400'>
        </div>
      </div>
    </div>
  )
}
