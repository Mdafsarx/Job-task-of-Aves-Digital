'use client'
import React from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline, IoSunny } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { Context } from "./Provider/Provider";


export default function DashboardNavbar() {

    const { sideBar, setSideBar } = React.useContext(Context);



    return (
        <nav className="w-full h-14 px-5 border-b flex items-center justify-between *:text-black">
            {
                sideBar
                    ? <GoSidebarExpand className="text-2xl cursor-pointer hover:text-[#3DD598]" onClick={() => {
                        setSideBar(false)
                    }} />
                    : <GoSidebarCollapse className="text-2xl cursor-pointer hover:text-[#3DD598]" onClick={() => {
                        setSideBar(true)
                    }} />
            }

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
