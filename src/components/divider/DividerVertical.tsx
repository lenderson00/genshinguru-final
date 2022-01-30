export const DividerVertical: React.FC<{text: string}> = ({ text }) => {
  return (
    <div className=" w-4 flex flex-col gap-1 items-center">
      <div className="bg-gray-800/5 w-0.5 5 h-full"></div>
      {text}
      <div className="bg-gray-800/5 w-0.5 5 h-full"></div>
    </div>
  )
}