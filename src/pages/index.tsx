import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../components/button'
import { TransparentCard } from '../components/cards/TransparentCard'

import Person from '../assets/png/avatar.png'

const menuItems = ['Home', 'Story', 'About']
const activeMenu = 'Home'

const Home: NextPage = () => {
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
                menuItems.map (item => {
                  return  <li key={item} className={activeMenu === item ? 'text-orange-500 group' : 'group'} >
                            <Link href={item === 'Home' ? '' : item.toLowerCase()}>{item}</Link>
                            <div className="h-0.5 bg-orange-500 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-500"></div>
                          </li>
                })
              }
            </ul>
            <Link href="/login" passHref>
              <Button content='Login' span='Olá Guru!' spanDirection='bottom'/>
            </Link>
            
          </div>
          <div className='relative z-30 block lg:hidden design-button' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </nav>
        <div className="flex justify-between max-w-screen-xl py-8 mx-auto">
          <div className="flex flex-col max-w-full gap-4 lg:max-w-xl">
            <h1 className='text-6xl font-bold leading-tight '>
            Perfect your <br /> own <span className='text-orange-500'>RNG</span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Commodi fuga exercitationem ut itaque ducimus
            eveniet natus doloribus obcaecati rerum assumenda
            quisquam alias dolorum nisi.
            </p>
            <button className='w-full py-4 mt-5 bg-orange-500 rounded-xl '>
            GET STARTED
            </button>
          </div>
          <div className='absolute right-0 hidden max-w-xl lg:block'>
            <Image src={Person} alt="avatar" />
          </div>
        </div>
        <div className='flex flex-col items-center flex-1 gap-10 pt-10 lg:flex-row lg:gap-5'>
          <TransparentCard number={0} />
          <TransparentCard number={1} />
          <TransparentCard number={2} />
        </div>
        <div className='w-full pt-2 font-medium text-center'>
        ... or <span className='text-blue-400'>Enter as Guest</span>
        </div>
        <div className='w-full pt-1 text-sm font-medium text-center text-gray-400'>
        Copyright © 2021 Genshin Guru   
        </div>
      </div>
    </div>
  )
}

export default Home
