
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { classNames } from '../../utils/classNames';
import { ThemeToggle } from '../ThemeToggle';


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Contact', href: '#contact', current: false }
]


export const Header = () => {
  return (
    <Disclosure as="nav" className="dark:bg-slate-900 bg-slate-200">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white dark:hover:bg-slate-700 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <div
                    className="block w-auto h-8 lg:hidden"
                  >
                    <h5 className='text-xl font-bold text-slate-800 dark:text-white'>Genshin Guru</h5> 
                  </div>
                  <div
                    className="hidden w-auto h-8 lg:block"
                  >
                    <h5 className='text-xl font-bold text-slate-800 dark:text-white'>Genshin Guru</h5> 
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link 
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      key={item.name}
                      >
                        <a 
                        className={classNames(
                          item.current ? 'dark:text-orange-400 text-orange-600 font-bold' : 'text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-50',
                          'px-3 py-2 rounded-md text-sm font-medium animated'
                        )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-md text-slate-400 bg-slate-100 dark:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-800 focus:ring-offset-slate-200 dark:focus:ring-white focus:ring-slate-800"
                >
                  <span className="sr-only">View notifications</span>
                  <ThemeToggle />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-slate-900 text-white' : 'text-slate-600 dark:text-slate-300 dark:hover:bg-slate-700  hover:bg-slate-300 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};