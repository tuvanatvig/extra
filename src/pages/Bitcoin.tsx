import BitcoinTable from "../components/BitcoinTable"

type Row = {
  time: number
  open: number
  high: number
  low: number
  close: number
  volumefrom: number
  volumeto: number
}

function Bitcoin({ rows }: { rows: Row[] }) {
  return (
    <div className="min-h-screen bg-[color:var(--brand-soft)]/10">
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-6 rounded-2xl border border-[color:var(--brand-soft)]/30 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-[color:var(--brand-dark)]">Bitcoin Data</h1>
          <h3 className="mt-1 text-sm text-gray-600">How has the Bitcoin currency evolved over the past 100 days? Let's take a look!</h3>
        </div>
        <BitcoinTable rows={rows} />
      </div>
    </div>

  )
}

export default Bitcoin