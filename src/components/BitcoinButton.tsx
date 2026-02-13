import { Link } from "react-router-dom"

function BitcoinButton(){
    return(
        <div className="flex flex-col items-center gap-4 mt-10">
            <Link to="/bitcoin" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
                Bitcoin Data
            </Link>

        <p className="text-gray-600">
            Click on button to see the Bitcoin data
        </p>
        </div>
    )
}

export default BitcoinButton;