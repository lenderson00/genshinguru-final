import { LockClosedIcon } from '@heroicons/react/solid'
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Logo from '../../components/Icons/Logo'
import { ThemeToggle } from '../../components/ThemeToggle'


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = parseCookies(ctx);
    
    if(cookies['genshinguru.token']) {
      throw new Error('User Authentication ')
    }
    
    return {
      props: {} as never,
    };
    
  }
  catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {} as never,
    };
  }
}



const Login: React.FC = () => {


  const { register, handleSubmit } = useForm();

  const onSubmit = async (input: any) => {
    try {

      console.log(input)

      toast.success('Login realizado com sucesso');
    } catch (error) {
      const e = error as Error
      
      toast.error(e.message);
    }
  }

  
  return (
    <>
      <div className="flex items-center w-full min-h-screen ">

        <div className="relative flex-1 w-full px-4 py-12 space-y-8 sm:px-6 lg:px-8">
          <div className='max-w-md mx-auto'>
            <div>
              <Logo className='w-24 fill-orange-500 dark:fill-orange-400' />

              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Or {' '}
                <a href="#" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400 animated">
                  start your 7-day free trial
                </a>
              </p>
            </div>

            <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" defaultValue="true" {...register('remember')} />
              <div className="-space-y-px rounded-md shadow-sm ">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 font-semibold text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-none appearance-none dark:border-slate-400 dark:text-white dark:bg-slate-500 dark:placeholder:text-slate-300 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    {...register('password')}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 font-semibold text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-none appearance-none dark:border-slate-400 dark:text-white dark:bg-slate-500 dark:placeholder:text-slate-300 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <input
                    id="remember-me"
                    {...register('remember-me')}
                    type="checkbox"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded cursor-pointer dark:text-orange-400 animated focus:ring-orange-500 dark:focus:ring-orange-300"
                  />
                  <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900 cursor-pointer select-none dark:text-slate-100">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400 animated">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md animated group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="w-5 h-5 text-orange-500 group-hover:text-orange-400" aria-hidden="true" />
                  </span>
                  Sign in
                </button>
              </div>
            </form>

            <div className='flex flex-col gap-2 mt-8 text-center divide-y'>
              <h2>Ou entre com</h2>
              <div className='flex justify-between pt-2'>
                <div>
                  Google
                </div>
                <div>
                  Facebook
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden h-screen bg-orange-400 lg:block lg:w-1/2 '>

        </div>
      </div>

      <div className='fixed bottom-0 right-0 mb-4 mr-4 '>
        <button className='p-2 bg-gray-200 rounded-full cursor-pointer dark:bg-slate-700'>
          <ThemeToggle />
        </button>
      </div>

      
      

      
      
    </>
  )
}

export default Login