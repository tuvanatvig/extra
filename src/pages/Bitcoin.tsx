import BitcoinTable from "../components/BitcoinTable"
import btc from "../data/bitcoin.json"

type ApiJson = {
  Data: {
    Data: Array<{
      time: number
      open: number
      high: number
      low: number
      close: number
      volumefrom: number
      volumeto: number
    }>
  }
}

function Bitcoin(){
  const rows = (btc as ApiJson).Data.Data

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bitcoin Data</h1>
      <BitcoinTable rows={rows} />
    </div>
  )
}

export default Bitcoin