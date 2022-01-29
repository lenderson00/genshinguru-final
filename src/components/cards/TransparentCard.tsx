interface TransparentCardProps {
  number: number

}
export const TransparentCard: React.FC<TransparentCardProps> = (props) => {
  return (
    <div className="relative w-full">
      <div className="w-12 h-12 bg-green-400 rounded-full absolute grid place-content-center text-xl font-bold -top-[35%] z-20 translate-y-1/2 left-1/2 -translate-x-1/2 shadow-2xl">
        {props.number}
      </div>
      <div className={'w-12 h-12 bg-red-400 absolute rounded-full bottom-2 right-2  '}>
      </div>
      <div className=" w-full gap-2 bg-white/10 border-slim rounded-xl py-8 px-8 flex flex-col items-center justify-center backdrop-blur-xl shadow-xl z-10 ">
        <p className="text-2xl text-center">
        asdasdasd
        </p>
        <p className="text-4xl font-bold text-orange-500 ">
        lkhjlkgfjh
        </p>
      </div>
      
     
    </div>
  )
}