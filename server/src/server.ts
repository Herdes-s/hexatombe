import express from "express";
import cors from "cors"

const port = 3000;
const app = express();

app.use(cors())

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Servidor aberto na porta: http://localhost:${port}`),
);
