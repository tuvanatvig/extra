import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-[color:var(--brand-soft)]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-semibold text-[color:var(--brand-dark)]"
        >
          Aboveit
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-[color:var(--brand-blue)] transition"
          >
            Home
          </Link>

          <Link
            to="/bitcoin"
            className="text-gray-600 hover:text-[color:var(--brand-blue)] transition"
          >
            Bitcoin
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
