export default function SummaryCard({ title, number, percent, color, progressColor }) {
  return (
    <div className={`${color} hover: rounded-md p-5 flex items-center justify-between`}>
      {/* title and number */}
      <div>
        <h4>{title}</h4>
        <h2 className="text-3xl font-black">{number}</h2>
      </div>
      {/* radial progress */}
      <div className={`radial-progress ${progressColor}`} style={{ "--value": percent, "--thickness": "14px" }} role="progressbar">
        <span className="text-black font-bold">
        {percent}%
        </span>
      </div>
    </div>
  )
}
