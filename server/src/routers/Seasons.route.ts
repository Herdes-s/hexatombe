// src/routers/Seasons.route.ts

import express from "express";
import { getAllSeasons } from "../controllers/Seasons.controller";

const router = express.Router();

router.get("/api/seasons", getAllSeasons);

export default router;
