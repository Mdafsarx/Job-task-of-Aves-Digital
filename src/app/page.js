'use client'
import { LineChart, PieChart } from "@mui/x-charts";
import SummaryCard from "./Components/Dashboard/SummaryCard";
import PropertyData from "./Components/Dashboard/PropertyData";
export default function Home() {


  return (
    <div className="space-y-6">

      <div className="flex flex-col xl:flex-row gap-6">

        {/* summery cards */}
        <div className="xl:w-[60%] grid md:grid-cols-2 gap-4">

          <SummaryCard title={'Total Properties'} number={550} percent={70} color={'bg-[#F9D9DACC]'} progressColor={'text-[#fcbdbf]'} />
          <SummaryCard title={'Available Properties'} number={500} percent={80} color={'bg-[#82E4C8CC]'} progressColor={'text-[#6cffd5CC]'} />
          <SummaryCard title={'Rented Properties'} number={50} percent={40} color={'bg-[#FFEDCDCC]'} progressColor={'text-[#ffdca0]'} />
          <SummaryCard title={'Top Properties'} number={400} percent={85} color={'bg-[#D8DBECCC]'} progressColor={'text-[#bfc9ff]'} />

        </div>

        <div className="xl:w-[40%]">
          <div className="text-center bg-[#F2F6F9] dark:bg-[#181024] p-2 rounded-t-md border">
            <h3 className="text-lg font-bold dark:text-white">Rent Status</h3>
          </div>
          <div className="border border-t-0 rounded-b-md h-60 flex items-center justify-center">
            <PieChart
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

      <div className="flex flex-col xl:flex-row gap-6">

        {/* Properties table data */}
        <div className="xl:w-[60%]">
          <PropertyData />
        </div>

        {/* Chart */}
        <div className="xl:w-[40%]">
          <div className="text-center bg-[#F2F6F9] dark:bg-[#181024] dark:text-white p-2 rounded-t-md border">
            <h3 className="text-lg font-bold">Property Status</h3>
          </div>
          <div className="border border-t-0 rounded-b-md h-[17.95rem] flex items-center justify-center">
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
