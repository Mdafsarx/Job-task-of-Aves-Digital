'use client'
import { createContext, useState } from "react"

export const Context = createContext(null)
export default function Provider({ children }) {

    const [sideBar, setSideBar] = useState(true);
    const [refresh, setRefresh] = useState(false)


    return (
        <Context.Provider value={{ sideBar, setSideBar, refresh, setRefresh }}>
            {children}
        </Context.Provider>
    )
}
