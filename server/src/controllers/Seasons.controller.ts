// src/controllers/Seasons.controller.ts

import { prisma } from "../lib/prisma";
import type { Request, Response } from "express";

export async function getAllSeasons(req: Request, res: Response) {
  const seasons = await prisma.season.findMany({});
  res.json(seasons);
}
