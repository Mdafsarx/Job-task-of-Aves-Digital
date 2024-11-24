export default function PropertyData() {

    const data = [
        {
            "id": 1,
            "propertyName": "Sunset Apartments",
            "propertyType": "Apartment",
            "location": "Miami",
            "ownerName": "John Doe",
            "rentalStatus": "Available",
            "rentPrice": 1200,
            "listedDate": "2024-11-20",
            "status": "Newly Listed"
        },
        {
            "id": 2,
            "propertyName": "Greenwood Villa",
            "propertyType": "House",
            "location": "Springfield",
            "ownerName": "Jane Smith",
            "rentalStatus": "Rented",
            "rentPrice": 2500,
            "listedDate": "2024-10-15",
            "status": "Under Maintenance"
        },
        {
            "id": 3,
            "propertyName": "Downtown Offices",
            "propertyType": "Commercial",
            "location": "NewYork",
            "ownerName": "Michael Johnson",
            "rentalStatus": "Available",
            "rentPrice": 5000,
            "listedDate": "2024-09-30",
            "status": "Ready to Move"
        },
        {
            "id": 4,
            "propertyName": "Lakeside Cottage",
            "propertyType": "House",
            "location": "Denver",
            "ownerName": "Emily Carter",
            "rentalStatus": "Available",
            "rentPrice": 1800,
            "listedDate": "2024-11-10",
            "status": "Newly Renovated"
        },
        {
            "id": 5,
            "propertyName": "Cityscape Studio",
            "propertyType": "Apartment",
            "location": "Chicago",
            "ownerName": "David Miller",
            "rentalStatus": "Rented",
            "rentPrice": 1500,
            "listedDate": "2024-10-01",
            "status": "Lease Expiring Soon"
        }
    ]

    return (
        <div className="w-full relative overflow-x-auto">
            {/* filter and add Property */}
            <div className="flex items-center justify-between flex-col flex-wrap md:flex-row pb-4 ">
                {/* filter */}
                <div>
                    <select className="select select-bordered select-sm w-full max-w-xs focus:outline-none focus:border focus:ring-0">
                        <option>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>

                {/* add property */}
                <button className="btn btn-sm text-sm bg-[#0062FF4D] text-[#0062FF] border border-[#0062FF]">Add Properties</button>
            </div>
            {/* property data */}
            <table className="w-full text-sm border">

                <thead className="text-xs uppercase bg-[#F2F6F9]">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Location</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Example user rows */}
                    {data.map((P) => (
                        <tr key={P?.id} className="border-b">
                            <td className="pl-10 py-3.5">{P.propertyName}</td>
                            <td className="pl-10 py-3.5">{P.propertyType}</td>
                            <td className="pl-10 py-3.5">{P.location}</td>
                            <td className="pl-10 py-3.5">{P.rentPrice}</td>
                            <td className="pl-10 py-3.5">{P.status}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
