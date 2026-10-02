import express, { type Express, type Request, type Response } from "express";
import cors from "cors"

import PersonsController from "./routers/Persons.route.ts"
import ProtagonistsController from "./routers/Protagonists.route.ts"
import SeasonsController from "./routers/Seasons.route.ts"

const app: Express = express();
const port = 3000;


app.use(express.json());
app.use(cors())

app.use("/", PersonsController)
app.use("/protagonists", ProtagonistsController)
app.use("/seasons", SeasonsController)

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Servidor aberto na porta: http://localhost:${port}`),
);
