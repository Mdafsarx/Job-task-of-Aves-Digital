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
import { Context } from './Provider/Provider';



export default function DashboardSideBar() {

    const route = usePathname()
    const { sideBar, setSideBar } = React.useContext(Context);


    return (
        <div className={`${sideBar ? 'w-64' : ''}  bg-[#F2F6F9] min-h-screen border-r *:text-black hidden md:flex flex-col justify-between`}>

            <div>
                {/* logo */}
                <h3 className='font-medium h-14 flex items-center justify-start font-nunito gap-x-3 pl-5'>
                    <FaHouseDamage className="text-3xl text-[#0062FF]" /><span className="text-xl -mb-1">{sideBar && 'EffortEdge'}</span>
                </h3>

                {/* pages */}
                <div className={`p-[1.4rem] ${sideBar && 'pr-3'} space-y-3`}>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'} ${route === '/' && 'bg-gradient-to-r from-[#3DD59866] via-[#0062FF66] to-[#0062FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md'} `}><LuLayoutDashboard />
                        {sideBar && 'Dashboard'} </Link>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><LuTableProperties />{sideBar && 'Properties'}</Link>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><BiMessageSquareDetail />{sideBar && 'Message'}</Link>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><IoCalendarNumberOutline />{sideBar && 'Calender'}</Link>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><TbReportSearch />{sideBar && 'Report'}</Link>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><MdHelpOutline />{sideBar && 'Help'}</Link>
                </div>
            </div>

            {/* pages */}
            <div className={`p-[1.4rem] ${sideBar && 'pr-3'} space-y-3`}>
                <p className="uppercase text-sm text-gray-600">{sideBar && 'others'}</p>
                <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><CiSettings />{sideBar && 'Setting'}</Link>
                <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 ${sideBar && 'pl-2.5'}`}><MdHelpOutline />{sideBar && 'Help Center'}</Link>
            </div>

        </div>
    )
}
