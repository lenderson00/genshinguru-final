import { Sidebar } from "./Sidebar"

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-700 text-white">
      <div className="flex relative mx-auto">
        <Sidebar />
       
        <div className="flex-1  px-4 pb-4 pt-20 relative">
        <div className="absolute top-4">
            asdasd
        </div>

        </div>
      </div>
    </div>
  )
}