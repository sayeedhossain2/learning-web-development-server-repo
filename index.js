const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("news api running");
});

app.listen(port, () => {
  console.log(`web development run on port ${port}`);
});
