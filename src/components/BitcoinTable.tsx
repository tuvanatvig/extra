import { useMemo, useState, useEffect } from "react"
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

//make table
function BitcoinTable({ rows }: { rows: Row[] }) {
  const pageSize = 20
  const [page, setPage] = useState(1)

  const total = rows.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  // if rows changes (new fetch), keep page valid
  useEffect(() => {
    setPage(1)
  }, [total])

  const safePage = Math.min(Math.max(page, 1), totalPages)
  const startIndex = (safePage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, total)

const visibleRows = useMemo(() => {
  const reversed = [...rows].reverse()   //reverse the order to get the newest date first
  return reversed.slice(startIndex, endIndex)
}, [rows, startIndex, endIndex])


  const showingFrom = total === 0 ? 0 : startIndex + 1
  const showingTo = endIndex

  const prev = () => setPage((p) => Math.max(1, p - 1))
  const next = () => setPage((p) => Math.min(totalPages, p + 1))

  return (
    <div className="bg-white rounded-2xl border border-[color:var(--brand-soft)]/30 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[color:var(--brand-blue)] text-white">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Open</th>
              <th className="px-4 py-3 text-left">High</th>
              <th className="px-4 py-3 text-left">Low</th>
              <th className="px-4 py-3 text-left">Close</th>
              <th className="px-4 py-3 text-left">Vol (from)</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {visibleRows.map((r) => (
              <tr key={r.time} className="odd:bg-white even:bg-[color:var(--brand-soft)]/10 hover:bg-[color:var(--brand-soft)]/20 transition-colors">
                <td className="px-4 py-3">
                  {new Date(r.time * 1000).toLocaleDateString()} 
                </td>
                <td className="px-4 py-3 text-left">{r.open}</td>
                <td className="px-4 py-3 text-left">{r.high}</td>
                <td className="px-4 py-3 text-left">{r.low}</td>
                <td className="px-4 py-3 text-left">{r.close}</td>
                <td className="px-4 py-3 text-left">{r.volumefrom}</td>
              </tr>
            ))}

            {visibleRows.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-gray-500" colSpan={6}>
                  No rows
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={prev}
            disabled={safePage === 1}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={next}
            disabled={safePage === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{showingFrom}</span> to{" "}
              <span className="font-medium">{showingTo}</span> of{" "}
              <span className="font-medium">{total}</span> results
            </p>
          </div>

          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
            <button
              onClick={prev}
              disabled={safePage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </button>

            <button
              className="relative z-10 inline-flex items-center bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white"
              aria-current="page"
              type="button"
            >
              {safePage}
            </button>

            <button
              onClick={next}
              disabled={safePage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}


export default BitcoinTable