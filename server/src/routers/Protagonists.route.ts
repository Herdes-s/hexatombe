// src/routers/Protagonists.route.ts

import express from "express";
import { getAllProtagonists } from "../controllers/Protagonists.controller";

const router = express.Router();

router.get("/api/protagonists", getAllProtagonists);

export default router;