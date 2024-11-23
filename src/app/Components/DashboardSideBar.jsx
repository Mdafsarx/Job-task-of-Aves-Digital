'use client'
import React from 'react'
import Link from "next/link";
import { FaHouseDamage } from "react-icons/fa";
import { LuLayoutDashboard, LuTableProperties } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { usePathname } from 'next/navigation';



export default function DashboardSideBar() {

    const route = usePathname()


    return (
        <div className='w-64 bg-[#F2F6F9CC] min-h-screen border-r *:text-black flex flex-col justify-between'>

            <div>
                {/* logo */}
                <h3 className='font-medium h-14 flex items-center justify-start gap-x-3 pl-5'>
                    <FaHouseDamage className="text-3xl text-[#0062FF]" /><span className="text-xl -mb-1">EffortEdge</span>
                </h3>

                <div className="p-6 pr-3 space-y-3">
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 pl-2.5  ${route==='/' && 'bg-gradient-to-r from-[#3DD59866] via-[#0062FF66] to-[#0062FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md'} `}><LuLayoutDashboard />Dashboard</Link>
                    <Link href={'/'} className="flex items-center gap-x-2 text-lg p-1 pl-2.5"><LuTableProperties />Properties</Link>
                    <Link href={'/'} className="flex items-center gap-x-2 text-lg p-1 pl-2.5"><BiMessageSquareDetail />Message</Link>
                    <Link href={'/'} className="flex items-center gap-x-2 text-lg p-1 pl-2.5"><IoCalendarNumberOutline />Calender</Link>
                    <Link href={'/'} className="flex items-center gap-x-2 text-lg p-1 pl-2.5"><TbReportSearch />Report</Link>
                    <Link href={'/'} className="flex items-center gap-x-2 text-lg p-1 pl-2.5"><MdHelpOutline />Help</Link>
                </div>
            </div>

            <div className="p-6 space-y-3">
                <p className="uppercase text-sm text-gray-600">others</p>
                <Link href={'/'} className="flex items-center gap-x-2 text-lg "><CiSettings className='' />Setting</Link>
                <Link href={'/'} className="flex items-center gap-x-2 text-lg "><MdHelpOutline />Help Center</Link>
            </div>

        </div>
    )
}
