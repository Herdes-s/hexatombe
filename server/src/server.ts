import express from "express";

const port = 3000;
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Servidor aberto na porta: http://localhost:${port}`),
);
