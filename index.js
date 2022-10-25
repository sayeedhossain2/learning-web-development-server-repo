const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const book = require("./data/book.json");

app.get("/", (req, res) => {
  res.send("news api running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const category = categories.find((p) => p.id === id);
  res.send(category);
});

app.get("/book", (req, res) => {
  res.send(book);
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const selectbook = book.filter((p) => p.id === id);
  res.send(selectbook);
});

app.listen(port, () => {
  console.log(`web development run on port ${port}`);
});
