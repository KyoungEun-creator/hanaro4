import express from "express";
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/hello/:id", (req, res) => {
  const { id } = req.params;
  const { q } = req.query;
  res.send({ message: "ok", id, q });
});

let USERS = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
];

// read
app.get("/users", (req, res) => {
  res.send(USERS);
});

// create
app.post("/users", (req, res) => {
  console.log("body>>", req.body);
  const { name } = req.body;
  const id = Math.max(...USERS.map(({ id }) => id)) + 1;
  USERS.push({ id, name });
  res.status(200).send({ id });
});

// update
app.patch("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = USERS.find(({ id }) => id === +userId);

  if (!user) {
    return res.status(400).send({ message: "user not found!" });
  }

  user.name = req.body.name;
  res.send({ message: "ok" });
});

// delete
app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  USERS = USERS.filter(({ id }) => id !== +userId);
  res.send({ message: "OK" });
});

app.listen(3500, () => {
  console.log("server started 3500 port");
});
