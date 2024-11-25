'use client'
import React from "react";
import { Context } from "../Provider/Provider";

export default function FormModal() {
    const { refresh, setRefresh } = React.useContext(Context);
    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        modal.close();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = target.name.value;
        const location = target.location.value;
        const price = target.price.value;
        const date = target.date.value;
        const type = target.type.value;
        const status = target.status.value;
        const formData = { name, location, price, date, type, status };
        const storedData = JSON.parse(localStorage?.getItem('propertyData')) || [];
        storedData.push(formData);
        localStorage.setItem('propertyData', JSON.stringify(storedData));
        setRefresh(!refresh)
        closeModal();
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal z-10">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        {/* property name */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                name="name"
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            />
                            <label htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Property name
                            </label>
                        </div>
                        {/* Property location */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="location"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Property Location
                            </label>
                        </div>
                        {/* Property price */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                name="price"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Property Price
                            </label>
                        </div>
                        {/* type and status taker selector */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <select defaultValue={'Type'} required name="type" className="select select-bordered select-md w-full max-w-xs focus:outline-none focus:border focus:ring-0">
                                    <option disabled >Type</option>
                                    <option>Commercial</option>
                                    <option>Apartment</option>
                                    <option>House</option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <select defaultValue={'Status'} required name='status' className="select select-bordered select-md w-full max-w-xs focus:outline-none focus:border focus:ring-0">
                                    <option disabled>Status</option>
                                    <option>Available</option>
                                    <option>Rented</option>
                                </select>
                            </div>
                        </div>
                        {/* Date picker */}
                        <div className="w-full">
                            <input type="date" name="date" className="input input-bordered w-full max-w-full" required />
                        </div>
                        {/* submit button */}
                        <div className="flex justify-end mt-5">
                            <button type="submit" className="bg-[#3DD598] btn text-white hover:bg-[#3DD598] hover:text-black">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
