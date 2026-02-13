import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Bitcoin from "./pages/Bitcoin"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bitcoin" element={<Bitcoin/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
