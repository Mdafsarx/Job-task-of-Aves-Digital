'use client'
import React from "react";
import { Context } from "./Provider/Provider";

export default function Main({ displayContent }) {
    const { sideBar, setSideBar } = React.useContext(Context);
    return (
        <div className={`pt-[4.7rem] ${sideBar ? 'pl-[16.4rem]':'pl-[5.75rem]'}`}>
            {displayContent}
        </div>
    )
}
