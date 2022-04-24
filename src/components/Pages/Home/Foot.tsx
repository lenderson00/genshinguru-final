
type FootProps = {
  props: {
    title: string
    description: string
    step: number
  }

}

export const Foot: React.FC<FootProps> = ({ props }) => {
  return (
    <div className="duration-300 transform bg-white border shadow-sm cursor-default select-none sm:rounded dark:border-slate-700 dark:bg-slate-800 hover:shadow">

    <div className="flex items-center justify-between px-5 py-4 mb-3 dark:bg-slate-700 bg-slate-100 ">
      <p className="text-lg font-bold leading-5 dark:text-white text-slate-900">{ props.title}</p>
      <p className="flex items-center justify-center w-6 h-6 font-bold rounded bg-slate-200 text-deep-purple-accent-400 dark:bg-slate-600 dark:text-white text-slate-500">
        {props.step}
      </p>
    </div>

    <p className="px-5 pb-5 text-sm text-gray-400 dark:text-slate-400 ">
      {props.description}
    </p>
  </div>
  )
}
