import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { filterUsers } from "../utils/filterUsers";
import SearchInput from "../components/SearchInput";
import UserList from "../components/UserList";
import UserModal from "../components/UserModal";

export default function UsersPage() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = filterUsers(users, search);

  if (loading)
    return <p className="text-center py-12 text-slate-500">Loading...</p>;
  if (error) return <p className="text-center py-12 text-rose-600">{error}</p>;

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h1 className="text-2xl font-semibold text-slate-900 mb-6">
            Peeps: People Search Directory
          </h1>
          <SearchInput value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <UserList users={filteredUsers} onSelect={setSelectedUser} />
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
}
