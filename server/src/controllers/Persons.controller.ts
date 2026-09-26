// src/controllers/Persons,controller.ts

import {prisma} from "../lib/prisma"
import type { Request, Response } from "express";

export async function getAllPersons(req: Request, res: Response) {
  const persons = await prisma.person.findMany()
  res.json(persons)
}

// export async function BuscarPersonagemPorid(req: Request, res: Response) {
//   const { id } = req.params;
// }
