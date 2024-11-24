'use client'
import { LineChart, PieChart } from "@mui/x-charts";
import SummaryCard from "./Components/Dashboard/SummaryCard";
import PropertyData from "./Components/Dashboard/PropertyData";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

export default function Home() {



  return (
    <div className="space-y-6">

      <div className="flex gap-x-6">

        {/* summery cards */}
        <div className="w-[60%]  grid grid-cols-2 gap-4">

          <SummaryCard title={'Total Properties'} number={550} percent={70} color={'bg-[#F9D9DACC]'} progressColor={'text-[#fcbdbf]'} />
          <SummaryCard title={'Available Properties'} number={500} percent={80} color={'bg-[#82E4C8CC]'} progressColor={'text-[#6cffd5CC]'} />
          <SummaryCard title={'Rented Properties'} number={50} percent={40} color={'bg-[#FFEDCDCC]'} progressColor={'text-[#ffdca0]'} />
          <SummaryCard title={'Top Properties'} number={50} percent={40} color={'bg-[#D8DBECCC]'} progressColor={'text-[#bfc9ff]'} />

        </div>


        <div className="w-[40%]">
          <div className="text-center bg-[#F2F6F9] p-2 rounded-t-md border">
            <h3 className="text-lg font-bold">Rent Status</h3>
          </div>
          <div className="border border-t-0 rounded-b-md h-60 flex items-center justify-center">
            <PieChart
              className=""
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                  ],
                },
              ]}
              width={450}
              height={210}
            />
          </div>
        </div>

      </div>

      <div className="flex gap-x-6">

        {/* Properties table data */}
        <div className="w-[60%]">
          <PropertyData />
        </div>

        {/* Chart */}
        <div className="w-[40%]">
          <div className="text-center bg-[#F2F6F9] p-2 rounded-t-md border">
            <h3 className="text-lg font-bold">Property Status</h3>
          </div>
          <div className="border border-t-0 rounded-b-md h-[17.9rem] flex items-center justify-center">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={450}
              height={300}
            />
          </div>
        </div>


      </div>

    </div>
  );
}
