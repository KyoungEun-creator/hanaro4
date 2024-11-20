const BASE_URL = "http://localhost:3500/users";

type User = { id: number; name: string };

export const USERS: User[] = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
];

// Read
export const getUsers = async () => {
  // const res = await fetch(BASE_URL);
  const users = await fetch(BASE_URL).then((res) => res.json());

  return users as User[];
};

// Create
export const addUsers = async (name: string) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());

// Update
export const updateUsers = async (id: number, name: string) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());

// Delete
export const deleteUsers = async (id: number) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
