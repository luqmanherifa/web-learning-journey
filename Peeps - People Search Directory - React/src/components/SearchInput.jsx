export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email, or company..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
    />
  );
}
