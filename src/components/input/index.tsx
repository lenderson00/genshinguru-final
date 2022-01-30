import { NextPage } from "next";
import { InputHTMLAttributes, useState } from "react";
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { SiMonkeytie } from 'react-icons/si'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  open?: boolean
}

export const Input: NextPage<InputProps> = ({ label, ...props }) => {

  const [isNotOpen, setisNotOpen] = useState(true)
  
  const getIcon = () => {
    switch (props.type) {
      case 'password':
        return <VscEyeClosed  size={20}/>
      case 'text':
        return (isNotOpen ?? false) ? <VscEye size={20} /> : ''
    }
  }

  const handleClick = () => {
    setisNotOpen(!isNotOpen)
  }
  return (
    <div className="pt-3">
      <label htmlFor={props.type} className="font-medium text-md">{label}</label>
      <div 
      className="py-3 px-2 flex overflow-hidden items-center mt-2 w-full rounded-lg border-solid border border-gray-400 transition-all focus-within:shadow-md focus-within:shadow-orange-500/20 focus-within:border-orange-500 "
      >
        
        <input 
        name={props.type} 
        id={props.type} 
        {...props}
        type={ props.type === 'text' ? 'text' : isNotOpen ? 'password' : 'text'}
        className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
        />
        <div className="pr-2 cursor-pointer flex items-center" onClick={handleClick}>
          { 
            props.type !== 'password' ? '' : isNotOpen ? <VscEyeClosed  size={20}/> : <VscEye size={21} className={'pb-0.5'}/>
          }
        </div>
      </div>
    </div>
  )
}