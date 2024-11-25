export default function SummaryCard({ title, number, percent, color, progressColor }) {
  return (
    <div className={`${color} hover: rounded-md p-5 flex items-center justify-between`}>
      {/* title and number */}
      <div>
        <h4 className="dark:text-white">{title}</h4>
        <h2 className="text-3xl font-black dark:text-white">{number}</h2>
      </div>
      {/* radial progress */}
      <div className={`radial-progress ${progressColor}`} style={{ "--value": percent, "--thickness": "14px" }} role="progressbar">
        <span className="text-black dark:text-white font-bold">
        {percent}%
        </span>
      </div>
    </div>
  )
}
