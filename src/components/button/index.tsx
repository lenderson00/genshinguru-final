import { ButtonHTMLAttributes } from "react"


interface ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  span?: string
  spanDirection?: string 
  href?: string
}
export const Button: React.FC<ButtonElement> = ({content, ...props}) => {
  const getSpanDirection = (): string => {
    switch (props.spanDirection) {
      case 'top':
        return 'bottom-14 left-[50%] translate-x-[-50%] group-hover:scale-100'
      case 'bottom':
        return 'top-14 left-[50%] translate-x-[-50%] group-hover:scale-100'
      case 'right':
        return 'left-36 top-[50%] translate-y-[-50%] group-hover:scale-100'
      case 'left':
        return 'right-36 top-[50%] translate-y-[-50%] group-hover:scale-100'
      default:
        return ''
    }
  }
  return (
    
    <button className="button-normal group" {...props}>
      {content}
      { props.span !== null ?
        <span className={ "absolute bg-slate-900 py-3 px-6 shadow-2xl rounded-lg scale-0 transition-all duration-500 ease-in-out " + getSpanDirection() } >
          {props.span}
        </span> :
        <></>
      }
    </button>
  )
}