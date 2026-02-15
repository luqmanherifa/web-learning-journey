import { API_BASE_URL, ENDPOINTS } from "../constants/api";

export async function fetchUsers() {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.USERS}`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
