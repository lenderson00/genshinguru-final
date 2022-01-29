import type { NextPage } from 'next'
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
    <div className="w-full min-h-screen bg-gray-700 text-white overflow-hidden bg-gradient-to-br from-transparent to-gray-900">
      <div className="max-w-7xl relative mx-auto py-10 px-8 space-y-4 ">
        <nav className='flex items-center justify-between'>
          <a href="#" className='text-2xl font-semibold'>Genshin Guru</a>
          <div className='hidden lg:flex flex-row gap-x-24'>
            <ul className='flex flex-row gap-x-16 items-center tracking-wider font-medium text-lg'>
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
          <div className='block lg:hidden relative z-30 design-button' onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </nav>
        <div className="flex justify-between py-8 max-w-screen-xl mx-auto">
          <div className="max-w-full lg:max-w-xl flex flex-col gap-4">
            <h1 className='text-6xl font-bold leading-tight '>
            Perfect your <br /> own <span className='text-orange-500'>RNG</span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Commodi fuga exercitationem ut itaque ducimus
            eveniet natus doloribus obcaecati rerum assumenda
            quisquam alias dolorum nisi.
            </p>
            <button className='mt-5 bg-orange-500 w-full py-4 rounded-xl '>
            GET STARTED
            </button>
          </div>
          <div className='absolute max-w-xl right-0 hidden lg:block'>
            <Image src={Person} alt="avatar" />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row flex-1 gap-5 pt-10 space-x-4 items-center'>
          <TransparentCard number={0} />
          <TransparentCard number={0} />
          <TransparentCard number={0} />
        </div>
        <div className='w-full text-center font-medium pt-4'>
        ... or <span className='text-blue-400'>Enter as Guest</span>
        </div>
        <div className='w-full text-center font-medium pt-4 text-sm text-gray-400'>
        Copyright © 2021 Genshin Guru   
        </div>
      </div>
    </div>
  )
}

export default Home
