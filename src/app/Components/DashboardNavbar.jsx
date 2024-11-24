'use client'
import React from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline, IoSunny } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { Context } from "./Provider/Provider";
import DashboardDrawer from "./DashboardDrawer";


export default function DashboardNavbar() {

    const { sideBar, setSideBar } = React.useContext(Context);



    return (
        <div className={`fixed top-0 ${sideBar ? 'w-[calc(100vw-240px)] left-60' : 'w-[calc(100vw-72px)] left-[72px]'}`}>
            <nav className="w-full h-14 px-5 border-b flex items-center justify-between *:text-black bg-[#F2F6F9] md:bg-white ">
                {
                    sideBar
                        ? <GoSidebarExpand className="text-2xl cursor-pointer hover:text-[#3DD598] hidden md:block" onClick={() => {
                            setSideBar(false)
                        }} />
                        : <GoSidebarCollapse className="text-2xl cursor-pointer hover:text-[#3DD598] hidden md:block" onClick={() => {
                            setSideBar(true)
                        }} />
                }

                <DashboardDrawer />

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
        </div>
    )
}
