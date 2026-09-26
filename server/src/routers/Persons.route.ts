// src/routers/Persons.route.ts
import express from "express"
import { getAllPersons } from "../controllers/Persons.controller.ts"

const app = express();

const router = express.Router();

router.get("/api/persons", getAllPersons);

export default router;