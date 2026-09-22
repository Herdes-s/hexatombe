// src/controllers/Persons,controller.ts

import type { Request, Response } from "express";


export async function BuscarTodosOsPersonagens(req: Request, res: Response) {
  const person = { nome: "Mizum", idade: 20 };
  res.json(person);
};

export async function BuscarPersonagemPorid(req: Request, res: Response) {
    const {id} = req.params; 
}