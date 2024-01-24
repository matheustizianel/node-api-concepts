import express from "express";

const PORT = 3333;
const app = express();

app.get("/message/:id/:user", (req, res) => {
  const { id, user } = req.params;
  res.send(`Message ID: ${id} -------------- User name: ${user}`);
});

app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.send(`Page: ${page} -------------- Limited to ${limit} items.`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
