// src/controllers/Protagonists.controller.ts

import { prisma } from "../lib/prisma";
import type { Request, Response } from "express";

export async function getAllProtagonists(req: Request, res: Response) {
  const protagonists = await prisma.protagonist.findMany({
    include: {
      formas: true,
      golpes: true,
      armas: true,
    },
  });
  res.json(protagonists);
}
