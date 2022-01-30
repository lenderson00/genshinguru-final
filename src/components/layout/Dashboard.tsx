import { DashboardHeader } from "../menu/dashboradHeader"
import { Sidebar } from "./Sidebar"

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-700 text-white">
      <div className="flex relative mx-auto">
        <Sidebar />
       
        <div className="flex-1 px-4 lg:pr-4 lg:pl-6 pb-4 pt-20 relative grid place-content-center ">
          <DashboardHeader />
          <div className="text-5xl font-bold">
          {children}
          </div>
          
        </div>
      </div>
    </div>
  )
}