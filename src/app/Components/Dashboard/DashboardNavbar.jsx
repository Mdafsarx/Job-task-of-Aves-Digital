'use client'
import React, { useEffect, useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { Context } from "../Provider/Provider";
import DashboardDrawer from "../DashboardDrawer";
import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";


export default function DashboardNavbar() {

    const { sideBar, setSideBar } = React.useContext(Context);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className={`fixed top-0 z-50 ${sideBar ? 'w-full md:w-[calc(100vw-240px)] md:left-60' : 'w-full md:w-[calc(100vw-72px)] md:left-[72px]'}`}>
            <nav className="w-full h-14 pl-5 pr-10 border-b flex items-center justify-between *:text-black bg-[#F2F6F9] md:bg-[#ffffffE6]">
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

                    <div className="border-2 border-[#3DD598] p-1.5 rounded-full" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {theme === 'light' ? <BsSunFill className="text-xl" /> : <CiDark className="text-xl" />}
                    </div>

                    <div className="border-2 border-[#3DD598] p-1.5 rounded-full">
                        <IoPersonOutline className="text-xl" />
                    </div>

                </div>

            </nav>
        </div>
    )
}
