// src/routers/Persons.route.ts
import express from "express"
import { BuscarTodosOsPersonagens } from "../controllers/Persons.controller.ts"

const app = express();

const router = express.Router();

router.get("/api/persons", BuscarTodosOsPersonagens);

export default router;