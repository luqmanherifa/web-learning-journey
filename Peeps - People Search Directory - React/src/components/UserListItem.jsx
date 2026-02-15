export default function UserListItem({ user, onSelect }) {
  return (
    <div
      onClick={() => onSelect(user)}
      className="border border-slate-200 rounded-md overflow-hidden cursor-pointer hover:border-rose-300 transition-colors"
    >
      <div className="bg-slate-100 flex items-center justify-center h-32">
        <img src="/peeps.svg" alt="" className="w-12 h-12" />
      </div>

      <div className="p-3">
        <p className="font-medium text-slate-900 text-sm truncate">
          {user.name}
        </p>
        <p className="text-slate-500 text-xs truncate">{user.email}</p>
        <p className="text-slate-400 text-xs truncate mt-1">
          {user.company.name}
        </p>
      </div>
    </div>
  );
}
