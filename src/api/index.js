const express = require("express");
const { v4 } = require("uuid");
const apiRoutes = require("../routes/routes.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoutes);

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.listen(PORT, () => {
  console.log("El puerto es: " + PORT);
});
