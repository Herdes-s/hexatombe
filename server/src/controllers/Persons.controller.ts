// src/controllers/Persons,controller.ts

import { prisma } from "../lib/prisma";
import type { Request, Response } from "express";

export async function getAllPersons(req: Request, res: Response) {
  const persons = await prisma.person.findMany({
    include: {
      formas: true,
    },
  });
  res.json(persons);
}

export async function getForId(req: Request, res: Response) {
  const id = Number(req.params.id);

  const person = await prisma.person.findFirst({
    where: { id },
  });

  res.json(person);
}

export async function getForFormes(req: Request, res: Response) {
  const id = Number(req.params);

  const forms = await prisma.forma.findMany({
    where: { personId: id },
  });

  res.json(forms);
}
