import Image from 'next/image'

import Avatar from '../../assets/png/user-menu-buttom.png'
import Home from '../../assets/svg/home-icon.svg'
import Book from '../../assets/svg/book-icon.svg'
import Flower from '../../assets/svg/flower-icon.svg'
import Person from '../../assets/svg/person-icon.svg'
import { MenuItem } from "./menuItem"
import { useState } from 'react'

const menuList = [ 
{
  title: 'Dashboard',
  icon: Home,
  active: true
},
{
  title: 'Guru’s Story',
  icon: Book,
  active: false
},
{
  title: 'Artifacts',
  icon: Flower,
  active: false
},
{
  title: 'Character',
  icon: Person,
  active: false
}]

export const DashboardHeader = () => {
    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className="absolute flex justify-end w-full px-[5vw] lg:pr-24 top-4 ">
          <div className="relative rounded-full cursor-pointer w-14 h-14 bg-slate-300 " onClick={() => SetIsOpen(!isOpen)} >
            <div className='relative overflow-hidden rounded-full w-14 h-14'>
            <Image src={'https://images.unsplash.com/photo-1469334031218-e382a71b716b?'} alt={'avatar buttom'} layout="fill" objectFit='cover' />
            </div>
            <div className={`absolute top-16 right-0 shadow-xl transformers ${isOpen ? '  opacity-100 skew-y-0 rotate-0 -translate-y-0' : ' opacity-0 -skew-y-3 rotate-3 -translate-y-9'}`}>
              <ul className={`relative decoration-none flex gap-2 flex-col bg-gray-800/30 border-slim p-4 rounded-xl min-w-min backdrop-blur-xl z-10 `} >
                {
                  menuList.map(item => {
                    return (
                      <div key={item.title} className={`relative grid grid-cols-avatar gap- items-center w-full px-5 py-3 justify-items-start cursor-pointer transformers p-4 rounded-xl border-slim-hidden hover:bg-white/10 z-10 hover:border-slim `}>
                        <div className={` flex gap-5 items-center ${item.active ? ' text-green-400 font-bold fill-green-400' : ''}`}>
                          <Image src={item.icon} alt="logout icon" className='' />
                          <p className={''} >
                          {item.title}
                          </p> 
                        </div>
  
                      </div>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
    )
}