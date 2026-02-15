export function filterUsers(users, query) {
  const keyword = query.trim().toLowerCase();

  if (!keyword) return users;

  return users.filter((user) => {
    const name = user.name.toLowerCase();
    const email = user.email.toLowerCase();
    const company = user.company.name.toLowerCase();

    return (
      name.includes(keyword) ||
      email.includes(keyword) ||
      company.includes(keyword)
    );
  });
}
