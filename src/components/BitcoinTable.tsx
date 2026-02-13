import { useMemo, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

//tell what the rows should include
type Row = {
  time: number
  open: number
  high: number
  low: number
  close: number
  volumefrom: number
  volumeto: number
}

//transform UNIX timestamp to date
function fmtDate(unixSeconds: number) {
  return new Date(unixSeconds * 1000).toLocaleDateString()
}

//make table
function BitcoinTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Open</th>
            <th className="px-4 py-3">High</th>
            <th className="px-4 py-3">Low</th>
            <th className="px-4 py-3">Close</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.time} className="border-t">
              <td className="px-4 py-3">{fmtDate(r.time)}</td>
              <td className="px-4 py-3">{r.open}</td>
              <td className="px-4 py-3">{r.high}</td>
              <td className="px-4 py-3">{r.low}</td>
              <td className="px-4 py-3">{r.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default BitcoinTable