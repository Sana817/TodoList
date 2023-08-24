require("dotenv").config();
const cors = require("cors");
const express = require("express");
const todoRoutes = require("./Routes/TodoRoutes");
const db = require("./DB/db");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use("/", todoRoutes);

const PORT = process.env.PORT || 3000;
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
