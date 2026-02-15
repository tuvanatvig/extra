import { Link } from "react-router-dom"

function BitcoinButton(){
    return(
        <div className="flex flex-col items-center gap-6">
            <Link to="/bitcoin" className="group relative overflow-hidden bg-[color:var(--brand-blue)] text-white px-15 py-7 rounded-xl font-semibold transition hover:shadow-lg hover:scale-105">
                <span className="relative z-10">Bitcoin Data</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </Link>


        <p className="text-[color:var(--brand-dark)]/80">
            Click on button to see the Bitcoin data
        </p>
        </div>
    )
}

export default BitcoinButton;