export default function UserModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-8">
      <div className="bg-white border border-slate-200 rounded-lg w-full max-w-lg p-6">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">{user.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-slate-600">
              <span className="font-medium text-slate-700">Username:</span>{" "}
              {user.username}
            </p>
            <p className="text-slate-600">
              <span className="font-medium text-slate-700">Email:</span>{" "}
              {user.email}
            </p>
            <p className="text-slate-600">
              <span className="font-medium text-slate-700">Phone:</span>{" "}
              {user.phone}
            </p>
            <p className="text-slate-600">
              <span className="font-medium text-slate-700">Website:</span>{" "}
              {user.website}
            </p>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h3 className="font-medium text-slate-900 mb-2">Address</h3>
            <p className="text-slate-600">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-slate-600">
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Geo: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h3 className="font-medium text-slate-900 mb-2">Company</h3>
            <p className="text-slate-900">{user.company.name}</p>
            <p className="text-slate-600 italic">{user.company.catchPhrase}</p>
            <p className="text-slate-500 text-xs mt-1">{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
