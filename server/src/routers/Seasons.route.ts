// src/routers/Seasons.route.ts

import  express  from "express";
import { getAllSeasons } from "../controllers/Seasons.controller";

const router = express.Router();

router.get("/", getAllSeasons);

export default router;