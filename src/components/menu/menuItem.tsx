import { Hint } from "../hint"
import Image from 'next/image'

type Props = { 
  isOpen: boolean
  icon: any
  hint: string
  active?: boolean
}
export const MenuItem: React.FC<Props> = ({ isOpen, icon, hint, active }) => {
  return (
    <Hint hint={hint} hintDirection="right" active={!isOpen}>
      <div className={`relative flex items-center w-full px-5 py-3 justify-items-start gap-5 cursor-pointer transformers p-4 rounded-xl hover:bg-white/10 z-10 ${ active ? "border-slim backdrop-blur-xl bg-white/10" : ""} `}>
        <Image src={icon} alt="logout icon" className={` z-10`} />
        <p className={`${ isOpen ? "flex" : "hidden"}`}>
        {hint}
        </p> 
        
      </div>
      <div className={`${ active ? "flare-menu-item" : "hidden"} -z-1`}></div>
    </Hint>
  )
}