'use client'
import React from 'react'
import { Context } from '../Provider/Provider';

export default function Footer() {
    const { sideBar } = React.useContext(Context);

    return (
        <div className={`md:relative bottom-0 ${sideBar ? 'w-full md:w-[calc(100vw-255px)] md:left-[15rem]' : 'w-full md:w-[calc(100vw-72px)] md:left-[68px]'} overflow-hidden`}>
            <footer className="text-gray-600 text-sm md:text-base border-t p-4 text-center">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by EffortEdge Ltd</p>
                </aside>
            </footer>
        </div>
    )
}
