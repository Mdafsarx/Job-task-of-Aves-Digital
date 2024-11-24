import SummaryCard from "./Components/Dashboard/SummaryCard";

export default function Home() {
  return (
    <div className="flex gap-x-6">

      {/* summery cards */}
      <div className="w-1/2  grid grid-cols-2 gap-4">

        <SummaryCard title={'Total Properties'} number={550} percent={70} color={'bg-[#F9D9DACC]'} progressColor={'text-[#fcbdbf]'}/>
        <SummaryCard title={'Available Properties'} number={500} percent={80} color={'bg-[#82E4C8CC]'} progressColor={'text-[#6cffd5]'}/>
        <SummaryCard title={'Rented Properties'} number={50} percent={40} color={'bg-[#FFEDCDCC]'} progressColor={'text-[#ffdca0]'}/>
        <SummaryCard title={'Top Properties'} number={50} percent={40} color={'bg-[#D8DBECCC]'} progressColor={'text-[#bfc9ff]'}/>
      
      </div>

      <div className="w-1/2 bg-slate-500 text-[]">

      </div>

    </div>
  );
}
