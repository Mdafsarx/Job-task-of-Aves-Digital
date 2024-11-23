'use client'
import { createContext, useState } from "react"

export const Context = createContext(null)
export default function Provider({ children }) {

    const [sideBar, setSideBar]=useState(true)


    return (
        <Context.Provider value={{ sideBar, setSideBar}}>
            {children}
        </Context.Provider>
    )
}
