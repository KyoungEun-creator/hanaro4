import { addUsers, deleteUsers, getUsers, updateUsers, USERS } from "./users";

const OK = { message: "OK" };

describe("/users", () => {
  // Read
  test("get - users", async () => {
    const users = await getUsers();
    expect(users).toEqual(USERS);
  });

  // Create
  test("post - users", async () => {
    const res = await addUsers("Lee");
    expect(res).toHaveProperty("id");
    expect(res).toHaveProperty("message", "OK");
  });

  // Read
  test("get - users", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(3);
  });

  // Update
  test("patch - users", async () => {
    expect(await updateUsers(2, "KIM22")).toEqual(OK);
  });

  // Read
  test("get - users", async () => {
    const users = await getUsers();
    const user = users.find(({ id }) => id === 2);
    expect(user).toEqual({ id: 2, name: "KIM22" });
  });

  // Delete
  test("delete - users", async () => {
    expect(await deleteUsers(2)).toEqual(OK);
  });

  // Read
  test("get - users", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(2);
  });
});
