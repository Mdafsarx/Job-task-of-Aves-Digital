'use client'
import React from "react";
import { Context } from "./Provider/Provider";

export default function Main({ displayContent }) {
    const { sideBar, setSideBar } = React.useContext(Context);
    return (
        <div className={`pt-[4.7rem] pr-3 md:pr-5 pb-5 min-h-screen ${sideBar ? 'pl-3 md:pl-[16.4rem]':'pl-5 md:pl-[5.75rem]'}`}>
            {displayContent}
        </div>
    )
}
