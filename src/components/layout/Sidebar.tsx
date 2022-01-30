import { useState } from "react"
import { MdArrowBackIosNew } from "react-icons/md"
import Image from 'next/image'
import Home from '../../assets/svg/home-icon.svg'
import Book from '../../assets/svg/book-icon.svg'
import Flower from '../../assets/svg/flower-icon.svg'
import Person from '../../assets/svg/person-icon.svg'
import Logout from '../../assets/svg/logout-icon.svg'
import { Hint } from "../hint"
import { MenuItem } from "../menu/menuItem"

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
export const Sidebar: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`flex flex-col h-screen py-4 px-4 transformers`}>
      <div className={`hidden lg:flex relative flex-1 bg-black/20 transformers px-4 py-6 rounded-3xl flex-col justify-between items-center text-white ${ isOpen ? `w-52` : ` w-[90px]`}` } >
          <div 
            className={`cursor-pointer absolute border-slim h-14 w-14 bg-white/5 backdrop-blur-2xl rounded-full grid place-content-center 
            hover:bg-white/10 hover:shadow-xl transformers top-14 ${ isOpen ? "-right-7 " : "right-4"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdArrowBackIosNew className={`${ isOpen ? "" : "rotate-180 transform-gpu"} `} />
          </div>
          <div className={`flex-col text-center pt-8 ${ isOpen ? "hidden" : "flex"} `} ></div>
          <div className={`flex-col text-center pt-8 ${ isOpen ? "flex" : "hidden"} `}>
              <h3 className={`text-sm`}>WELLCOME</h3>
              <h1 className={`text-3xl font-bold`}>PLAYER</h1>
          </div>
          <div className="flex flex-col gap-5 items-start relative z-10">
            {
              menuList.map(item => {
                return (
                  <MenuItem key={item.title} hint={item.title} icon={item.icon} isOpen={isOpen} active={item.active}/>
                )
              })
            }
            
          </div>
          <MenuItem hint="Logout" icon={Logout} isOpen={isOpen} />

          
          
      </div>
    </div>
  )
}