require("dotenv").config();
const express = require("express");
const cors = require("cors");
const budgetRoutes = require("./routes/budget-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/budget", budgetRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}...`);
});
