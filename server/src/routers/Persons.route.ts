// src/routers/Persons.route.ts
import express from "express";
import { getAllPersons, getForId, getForFormes } from "../controllers/Persons.controller.ts";

const app = express();

const router = express.Router();

router.get("/api/persons", getAllPersons);
router.get("/api/persons/:id", getForId);
router.get("/api/persons/:id/forms", getForFormes);

export default router;
