import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function HeaderBanner (): JSX.Element {
  return (
    <div className="bg-orange-600 dark:bg-orange-800">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-2 bg-orange-800 rounded-lg dark:bg-orange-700">
              <SpeakerphoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! Were excited to announce a brand new product.</span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-600 bg-white border border-transparent rounded-md shadow-sm dark:text-orange-500 hover:bg-orange-50"
            >
              Learn more
            </a>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 rounded-md hover:bg-orange-500 dark:hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
