import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/peeps.svg" alt="Peeps" className="w-6 h-6" />
          <span className="font-semibold text-slate-900">Peeps</span>
        </div>

        <div className="flex gap-6 text-sm">
          <Link
            to="/"
            className="text-slate-600 hover:text-rose-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-slate-600 hover:text-rose-600 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
