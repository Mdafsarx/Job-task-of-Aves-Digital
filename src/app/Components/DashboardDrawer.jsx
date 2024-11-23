'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { FiSidebar } from "react-icons/fi";
import { LuLayoutDashboard, LuTableProperties } from 'react-icons/lu';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { TbReportSearch } from 'react-icons/tb';
import { MdHelpOutline } from 'react-icons/md';
import Link from 'next/link';
import { FaHouseDamage } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { CiSettings } from 'react-icons/ci';


export default function DashboardDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const route = usePathname()

    const DrawerList = (
        <Box sx={{ width: 250 , backgroundColor:'#F2F6F9' ,height:'100%'}} role="presentation" onClick={toggleDrawer(false)}>

            <div>
                {/* logo */}
                <h3 className='font-medium h-14 flex items-center justify-start font-nunito gap-x-3 pl-3'>
                    <FaHouseDamage className="text-3xl text-[#0062FF]" /><span className="text-xl -mb-1">EffortEdge</span>
                </h3>

                {/* pages */}
                <div className={`p-5 pl-3 pr-3 space-y-3`}>
                    <Link href={'/'} className={`flex items-center gap-x-2 text-lg p-1 pl-1 ${route === '/' && 'bg-gradient-to-r from-[#3DD59866] via-[#0062FF66] to-[#0062FFCC] hover:scale-105 hover:duration-300 shadow-sm rounded-md'} `}><LuLayoutDashboard />
                        Dashboard</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><LuTableProperties />Properties</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><BiMessageSquareDetail />Message</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><IoCalendarNumberOutline />Calender</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><CiSettings />Setting</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><TbReportSearch />Report</Link>
                    <Link href={''} className={`flex items-center gap-x-2 text-lg p-1 pl-1`}><MdHelpOutline />Help</Link>
                </div>
            </div>

        </Box>
    );

    return (
        <div>
            <button onClick={toggleDrawer(true)} className='block md:hidden'> <FiSidebar className="text-2xl text-black cursor-pointer hover:text-[#3DD598] " /></button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}