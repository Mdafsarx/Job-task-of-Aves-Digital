import { GoSidebarExpand } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline, IoSunny } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";


export default function DashboardNavbar() {
    return (
        <nav className="w-full h-14 px-5 border-b flex items-center justify-between *:text-black">
            <GoSidebarExpand className="text-2xl" />

            <div className="flex items-center gap-x-3">

                <div className="border-2 border-[#3DD598] p-1.5 rounded-full">
                    <IoNotificationsOutline className="text-xl" />
                </div>

                <div className="border-2 border-[#3DD598] p-1.5 rounded-full">
                    <BsSunFill className="text-xl" />
                </div>

                <div className="border-2 border-[#3DD598] p-1.5 rounded-full">
                    <IoPersonOutline className="text-xl" />
                </div>

            </div>
        </nav>
    )
}
