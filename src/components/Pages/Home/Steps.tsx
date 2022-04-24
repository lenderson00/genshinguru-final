import { Foot } from './Foot'

const ThreeFootMockData = [
  {
    title: 'Step 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga exercitationem ut itaque ducimus eveniet natus doloribus obcaecati rerum assumenda quisquam alias dolorum nisi.',
    step: 1
  },
  {
    title: 'Step 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga exercitationem ut itaque ducimus eveniet natus doloribus obcaecati rerum assumenda quisquam alias dolorum nisi.',
    step: 2
  },
  {
    title: 'Step 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga exercitationem ut itaque ducimus eveniet natus doloribus obcaecati rerum assumenda quisquam alias dolorum nisi.',
    step: 3
  }
]

export const Steps: React.FC = () => {
  return (
    <div className="container py-16 mx-auto sm:px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">

      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 dark:bg-slate-500 lg:w-full lg:h-px" />
        </div>
        {ThreeFootMockData.map((foot, index) => (
          <Foot key={index} props={foot} />
        ))}
      </div>
    </div>
  )
}
