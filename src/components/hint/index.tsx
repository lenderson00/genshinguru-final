import { ButtonHTMLAttributes } from "react"


interface ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
  hint?: string
  hintDirection?: string 
  active?: boolean
}
export const Hint: React.FC<ButtonElement> = ({children, active, ...props}) => {
  const getSpanDirection = (): string => {
    switch (props.hintDirection) {
      case 'top':
        return 'bottom-14 left-[50%] translate-x-[-50%] group-hover:scale-100'
      case 'bottom':
        return 'top-14 left-[50%] translate-x-[-50%] group-hover:scale-100'
      case 'right':
        return 'left-24 top-[50%] translate-y-[-50%] group-hover:scale-100'
      case 'left':
        return 'right-12 top-[50%] translate-y-[-50%] group-hover:scale-100'
      default:
        return ''
    }
  }
  return (
    
    <button className="relative group w-full" {...props}>
      {children}
      { props.hint !== null && active ?
        <span className={ "absolute w-full min-w-max bg-slate-900/80 backdrop-blur-xl py-3 px-6 shadow-2xl rounded-lg scale-0 transition-all duration-500 ease-in-out " + getSpanDirection() } >
          {props.hint}
        </span> :
        <></>
      }
    </button>
  )
}