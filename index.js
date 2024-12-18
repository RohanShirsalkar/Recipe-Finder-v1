const express = require("express");
const app = express();
const port = 6969;
const recipeRoutes = require("./src/routes/recipe.route");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", recipeRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
