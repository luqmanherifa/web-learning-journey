import UserListItem from "./UserListItem";

export default function UserList({ users, onSelect }) {
  if (!users.length) {
    return <p className="text-center py-8 text-slate-500">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} onSelect={onSelect} />
      ))}
    </div>
  );
}
