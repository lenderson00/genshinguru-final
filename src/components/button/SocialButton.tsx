import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  channel: string
  color?: string
}
export const SocialButton: React.FC<Props> = ({ children, channel, color, ...props}) => {
  return (
    <button {...props} className='hover:text-orange-500 hover:border-orange-500 transformers cursor-pointer border gap-2 items-center justify-center text-center text-sm border-gray-300 border-solid h-min rounded-md py-2 px-5 flex cursor'>
      {children}
      <p>SignIn With {channel}</p>
    </button>
  )
}