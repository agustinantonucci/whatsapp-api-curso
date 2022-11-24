const express = require("express");
const apiRoutes = require("./src/routes/routes.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoutes);

app.listen(PORT, () => {
  console.log("El puerto es: " + PORT);
});
