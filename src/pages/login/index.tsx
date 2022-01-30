import { Button } from "../../components/button"
import { DividerHorizontal } from "../../components/divider/DividerHorizontal"
import { DividerVertical } from "../../components/divider/DividerVertical"
import { IoLogoGoogle, IoLogoFacebook, IoLogoGithub } from 'react-icons/io5'
import { Input } from "../../components/input"
import Image from "next/image"
import { useRouter } from 'next/router'

import { TiArrowBack } from 'react-icons/ti'

import Guru  from '../../assets/png/guru.png'
import useWindowDimensions from "../../hooks/UseWindowDimension"
import { SocialButton } from "../../components/button/SocialButton"

const Login: React.FC = () => {
  const { width } = useWindowDimensions()
  const router = useRouter()
// lg:bg-gray-700  lg:bg-gradient-to-br lg:from-transparent lg:to-gray-900
  return (
    <div 
      className="relative w-full min-h-screen flex  overflow-hidden items-center bg-login lg:bg-center lg:bg-no-repeat lg:bg-cover bg-white"
    >
      <div className="absolute z-20 right-5 md:right-10 top-5 cursor-pointer p-3 bg-white rounded-full lg:shadow-xl" onClick={() => router.back()} >
        <TiArrowBack size={30} color="#2A3E59"/>
      </div>
      <div  className="max-w-3xl w-full relative mx-auto py-10 lg:px-8 space-y-4 bg-white  lg:h-max lg:rounded-xl lg:shadow-2xl ">
        <div className="relative max-w-96 w-full p-5  flex flex-col lg:flex-row gap-2">
          <div className="lg:pr-5 flex flex-col w-full flex-1 gap-3 " >
            <div className="text-slate-700">
              <div className=""></div>
              <h2 className="text-2xl font-bold">Login 🤙</h2>
              <p>Lorem ipsum here too!</p>
            </div>
            <form action="" className=" flex flex-col gap-y-3 white">
              <div>
                <Input type={'text'} label="Email"/>
                <Input type={'password'} label="Password"/>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form-checkbox w-4 h-4 text-orange-500 bg-white rounded border border-gray-400  focus:ring-orange-500 cursor-pointer"
                />
                <label htmlFor="remember" className="pl-2 text-sm font-light text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-sky-500 hover:text-sky-600"> Forgot password?</a>

              
            </div>
            <Button content={"ENTER"} />
            </form>
          </div>
          { width === undefined ? '' : width < 1024 ?
          <DividerHorizontal /> :
          <DividerVertical text={"or"} />
          }
          <div className="lg:pl-5 flex-1 w-full in-front-of">
            <div className="border border-gray-300 border-solid h-min rounded-full p-1 flex justify-between lg:hidden" >
              <div className='w-8 h-8 flex items-center justify-center borde cursor-pointer '>
                <IoLogoGoogle  size={'24px'} className="hover:fill-orange-500 transformers" />
              
              </div>
              <div className='p-1 w-8 h-8 flex items-center justify-center cursor-pointer'>
                <IoLogoFacebook size={'24px'} className="hover:fill-orange-500 transformers"/>
              </div>
              <div className='p-1 w-8 h-8 flex items-center justify-center cursor-pointer'>
                <IoLogoGithub  size={'24px'}  className="hover:fill-orange-500 transformers" />
              </div>
            </div>

            <div className="hidden  w-full h-full  lg:grid place-content-center gap-5">
              <div>
               <h1 className="text-xl font-bold text-center">
                Connect with <br />
                Social Account
                </h1>
                <p className="font-light text-slate-500 text-[.8rem]  text-center">Lorem ipsum dolor sit amet <br /> consectetur, elit. </p>
              </div>
              <div className="flex flex-col gap-1 w-full">
                  <SocialButton channel="Google">
                    <IoLogoGoogle size={18} className="hover:fill-orange-500 transformers" />
                  </SocialButton>
                  <SocialButton channel="Facebook">
                    <IoLogoFacebook size={18} className="hover:fill-orange-500 transformers"/>
                  </SocialButton>
                  <SocialButton channel="Github">
                    <IoLogoGithub size={18} className="hover:fill-orange-500 transformers" />
                  </SocialButton>
              </div>
              

            </div>
          </div>
          <div className="absolute max-w-xl -right-52 top-36 hidden lg:block z-0">
            <Image src={Guru} alt="guru" />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Login