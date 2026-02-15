import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Bitcoin from "./pages/Bitcoin"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"

function App() {

  //make the states
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  //connect to API, with error handling
  const fetchData = async () => {
    try{
          const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=YOUR_KEY')
          if (!response.ok){
            throw new Error('Could not fetch data');
          }
          const data = await response.json();
          console.log(data);
          setDailyData(data.Data.Data);

    } catch(e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('An unknown error occured');
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() =>{
    fetchData();

  }, []);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{error}</span>

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitcoin" element={<Bitcoin rows={dailyData} />} />
      </Routes>
    </Router>
  )

}

export default App
