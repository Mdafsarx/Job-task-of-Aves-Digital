'use client'
import React, { useEffect, useState } from "react";
import FormModal from "./FormModal"
import { Context } from "../Provider/Provider";

export default function PropertyData() {

    const [storedData, setStoredData] = useState([])
    const { refresh } = React.useContext(Context);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage?.getItem('propertyData')) || [];
        setStoredData(localStorageData);
    }, [refresh]);

    const handleType = (e) => {
        const type = e.target.value;
        const filterData = JSON.parse(localStorage.getItem('propertyData'))?.filter((data) => data?.type === type)
        setStoredData(filterData)
    }
    const handleStatus = (e) => {
        const status = e.target.value;
        const filterData = JSON.parse(localStorage.getItem('propertyData'))?.filter((data) => data?.status === status)
        setStoredData(filterData)
    }

    return (
        <div className="w-full relative overflow-x-auto">
            {/* filter and add Property */}
            <div className="flex items-center justify-between flex-col flex-wrap md:flex-row pb-4 gap-3 md:gap-0">
                {/* filter */}
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <select defaultValue={'Type'} onChange={handleType} className="select dark:bg-[#0062FFCC] dark:text-white select-bordered select-sm w-full max-w-xs focus:outline-none focus:border focus:ring-0">
                        <option disabled >Type</option>
                        <option>Commercial</option>
                        <option>Apartment</option>
                        <option>House</option>
                    </select>
                    <select defaultValue={'Status'} onChange={handleStatus} className="select dark:bg-[#0062FFCC] dark:text-white select-bordered select-sm w-full max-w-xs focus:outline-none focus:border focus:ring-0">
                        <option disabled >Status</option>
                        <option>Available</option>
                        <option>Rented</option>
                    </select>
                </div>

                {/* add property */}
                <button onClick={
                    () => document.getElementById('my_modal_3').showModal()
                }
                    className="btn btn-sm text-sm bg-[#0062FF4D] text-[#0062FF] border border-[#0062FF]">Add Properties</button>
            </div>
            {/* property data */}
            <div className="max-h-72 overflow-y-auto">
                <table className="w-full text-sm border dark:text-white">

                    <thead className="text-xs uppercase bg-[#F2F6F9] dark:bg-[#181024] ">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Example user rows */}
                        {storedData?.map((P, i) => (
                            <tr key={i} className="border-y md:border-t hover:bg-[#F2F6F999] hover:dark:bg-[#18102499] ">
                                <td className="pl-11 py-3.5">{P.name}</td>
                                <td className="pl-11 py-3.5">{P.type}</td>
                                <td className="pl-11 py-3.5">{P.price}</td>
                                <td className="pl-11 py-3.5">{P.date}</td>
                                <td className="pl-11 py-3.5">{P.status}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            <FormModal />
        </div>
    )
}
